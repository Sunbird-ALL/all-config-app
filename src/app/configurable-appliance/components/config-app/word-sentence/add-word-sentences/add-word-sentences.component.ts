import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

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
  difficultyLvlList = AppConfig.difficultyLvlList;
  languageList = AppConfig.languages;
  contentTypeList = AppConfig.contentTypeList;


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
      });
  }

  cancel() {
      this.ref.close();
  }

  saveWordAndSentece(mode) {
      if (mode === 'Add') {
          if (this.addWordAndSentenceForm.invalid) {
              this.messages = [
                  { severity: 'error', summary: 'Form Field Required' }
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
                      { severity: 'error', summary: error}
                  ];
              }
          );
      } else if (mode === 'Edit') {
          if (this.editWordAndSentenceForm.invalid) {
              this.messages = [
                 { severity: 'error', summary: 'Form Field Required' }
              ];
              return;
          }
          const body = {
            collectionId: this.wordAndSentenceData.collectionId,
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
                      { severity: 'error', summary: error }
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
            collectionId: this.wordAndSentenceData.collectionId,
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
