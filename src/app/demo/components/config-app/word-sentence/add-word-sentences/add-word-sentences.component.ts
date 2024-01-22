import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContentService } from 'src/app/demo/service/content.service';

@Component({
  selector: 'app-add-word-sentences',
  templateUrl: './add-word-sentences.component.html',
  styleUrls: ['./add-word-sentences.component.scss']
})
export class AddWordSentencesComponent implements OnInit {
  data: any;
  mode: 'Add' | 'Edit';
  wordAndSentenceData: any;
  addWordAndSentenceForm: FormGroup;
  editWordAndSentenceForm: FormGroup;
  messages: Message[];
  difficulty: string;
  difficultyLvlList = [
      { label: 'LOW', value: 'low' },
      { label: 'MEDIUM', value: 'medium' },
      { label: 'DIFFICULT', value: 'difficult' },
  ];
  languageList = [
      { label: 'Hindi', value: 'hi' },
      { label: 'English', value: 'en' },
      { label: 'Tamil', value: 'ta' },
      { label: 'Kannada', value: 'kn' },
  ];

  contentTypeList = [{ label: 'Word', value: 'word' },{ label: 'Sentence', value: 'sentence' }];


  constructor(
      public formBuilder: FormBuilder,
      public ref: DynamicDialogRef,
      public dialogConfig: DynamicDialogConfig,
      private customerService: ContentService
  ) {
      this.data = this.dialogConfig.data;
      this.mode = this.data.mode;
      this.wordAndSentenceData = this.data.wordAndSentenceData;
  }

  ngOnInit() {
      this.initializeAddForm();
      if(this.mode === 'Edit'){
          this.initialzeEditForm();
      }
  }

  initializeAddForm() {
      this.addWordAndSentenceForm = this.formBuilder.group({
        language: ['', Validators.required],
        text: ['', Validators.required],
        publisher: ['', Validators.required],
        name: ['', Validators.required],
        contentType: ['', Validators.required],
      });
  }

  initialzeEditForm() {
      this.editWordAndSentenceForm = this.formBuilder.group({
        collectionId: [
            this.wordAndSentenceData?.collectionId ],
        contentType: [this.wordAndSentenceData?.contentType, Validators.required],
        contentText: [this.wordAndSentenceData?.contentSourceData[0].text || '', Validators.required],
        contentAudio: [''],
        // language: [this.wordAndSentenceData?.language, Validators.required],
        // text: [this.wordAndSentenceData?.text, Validators.required],
        // publisher: [this.wordAndSentenceData?.publisher, Validators.required],
        // name: [this.wordAndSentenceData?.name, Validators.required],
      });
  }

  cancel() {
      this.ref.close();
  }

  saveWordAndSentece(mode) {
      if (mode === 'Add') {
          if (this.addWordAndSentenceForm.invalid) {
              this.messages = [
                  // { severity: 'error', summary: this.i18nextPipe.transform('ADD_ORGANIZATION_BLANK_FIELD_MSG') }
              ];
              return;
          }

          
          const body = {
            collectionId: "",
            publisher: this.addWordAndSentenceForm.value.publisher,
            name: this.addWordAndSentenceForm.value.name,
            contentType: this.addWordAndSentenceForm.value.contentType,
            image: " ",
            language: this.addWordAndSentenceForm.value.language,
            status: "live",
            contentSourceData : [
                {
                    language: this.addWordAndSentenceForm.value.language,
                    audioUrl: "",
                    text : this.addWordAndSentenceForm.value.text,
                }
            ]
             
          };
          this.customerService.addMoreWords(body).subscribe(
              (response) => {
                  this.ref.close();
                  location.reload();
              },
              (error: any) => {
                  this.messages = [
                      // { severity: 'error', summary: this.i18nextPipe.transform('ADD_ORGANIZATION_ALREADY_EXIT') }
                  ];
              }
          );
      } else if (mode === 'Edit') {
          if (this.editWordAndSentenceForm.invalid) {
              this.messages = [
                  // { severity: 'error', summary: this.i18nextPipe.transform('ADD_ORGANIZATION_BLANK_FIELD_MSG') }
              ];
              return;
          }
          const body = {
            collectionId: "",
            // publisher: this.editWordAndSentenceForm.value.publisher,
            name: this.wordAndSentenceData.name,
            contentType: this.wordAndSentenceData.contentType,
            image: " ",
            language: this.wordAndSentenceData.language,
            status: "live",
            contentSourceData : [
                {
                    language: this.wordAndSentenceData.language,
                    audioUrl: "",
                    text : this.wordAndSentenceData.contentSourceData[0].text,
                }
            ]
             
          };
          this.customerService.addMoreWords(body).subscribe(
              (response) => {
                  this.ref.close();
                  location.reload();
              },
              (error: any) => {
                  this.messages = [
                      // { severity: 'error', summary: this.i18nextPipe.transform('ADD_ORGANIZATION_ALREADY_EXIT') }
                  ];
              }
          );
      }
  }

  editContent() {
    if (this.editWordAndSentenceForm.invalid) {
        this.messages = [
        { severity: 'error', summary: 'Add Required Data' }

        ];
        return;
    }
        const body = {
            collectionId: "",
            // publisher: this.editWordAndSentenceForm.value.publisher,
            name: this.wordAndSentenceData.name,
            contentType: this.editWordAndSentenceForm.value.contentType,
            image: " ",
            language: this.wordAndSentenceData.language,
            status: "live",
            contentSourceData : [
                {
                    language: this.wordAndSentenceData.language,
                    audioUrl: "",
                    text : this.editWordAndSentenceForm.value.contentText,
                }
            ]
             
          };
    
    this.customerService.editMoreWords(body,this.wordAndSentenceData._id).subscribe(
        (response) => {
            if(response.updated){
             this.ref.close(response.updated);
            }
        },
        (error: any) => {
            this.messages = [
                { severity: 'error', summary: 'Please fill all fields' }
            ];
        }
    );
}

}
