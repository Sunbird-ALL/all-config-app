import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
    selector: 'app-add-or-edit-story',
    templateUrl: './add-or-edit-story.component.html',
    styleUrls: ['./add-or-edit-story.component.scss'],
})
export class AddOrEditStoryComponent {
    data: any;
    mode: 'Add' | 'Edit';
    storyList: any;
    addStoryForm: FormGroup;
    editStoryForm: FormGroup;
    messages: Message[];
    CurrentChannelName: string;
    difficulty: string;
    difficultyLvlList = AppConfig.difficultyLvlList
    languageList = AppConfig.languages;
    contentTypeList = AppConfig.contentTypeList;

    constructor(
        public formBuilder: FormBuilder,
        public ref: DynamicDialogRef,
        public dialogConfig: DynamicDialogConfig,
        private contentService: ContentService,
        private router: Router

    ) {
        this.data = this.dialogConfig.data;
        this.mode = this.data.mode;
        this.storyList = this.data.wordAndSentenceData;
    }

    ngOnInit() {
        this.initializeAddForm();
        if(this.mode === 'Edit'){
            this.initialzeEditForm();
        }
        this.addStoryForm.patchValue({
            category: this.contentTypeList[0].value 
          });
    }


    initializeAddForm() {
        this.addStoryForm = this.formBuilder.group({
            name: ['', Validators.required],
            author: ['', Validators.required],
            language: ['', Validators.required],
            category : ['',Validators.required],
            description:'',
            image: '',
            difficulty: '',
        });
    }

    initialzeEditForm() {
        this.editStoryForm = this.formBuilder.group({
            name: [this.storyList?.name, Validators.required],
            author: [this.storyList?.author,Validators.required],
            language: [this.storyList?.language,Validators.required],
            image: this.storyList?.image,
            difficulty: this.storyList?.difficulty,
            description:this.storyList?.description,
            category:this.storyList?.category

        });
    }

    cancel() {
        this.ref.close();
    }

    addOrEditStory(mode) {
        if (mode === 'Add') {
        if (this.addStoryForm.invalid) {
          this.messages = [
            { severity: 'error', summary: 'Add Required Data' }
          ];
          return;
        }
        const body = {
            name: this.addStoryForm.value.name,
            author: this.addStoryForm.value.author,
            language: this.addStoryForm.value.language,
            category:this.addStoryForm.value.category,
            description:this.addStoryForm.value.description,
            status: "live",
        };

        this.contentService.addMoreStory(body).subscribe((response) => {
            if(response.status === "success"){
                this.ref.close(response.data);
            }
            
        }, (error: any) => {
          this.messages = [
            { severity: 'error', summary: 'error'}
          ]
        });
    }else if (mode === 'Edit') {
        if (this.editStoryForm.invalid) {
            this.messages = [
                { severity: 'error', summary:'Error' }
            ];
            return;
        }
        const body = {
            name: this.editStoryForm.value.name,
            author:this.editStoryForm.value.author,
            language: this.editStoryForm.value.language,
            category: this.editStoryForm.value.category,
            status: "live",

         
        };
        
        this.contentService.editStory(body,this.storyList._id).subscribe(
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

    navigateToSomeRoute() {
        this.router.navigate(['/content/story/list']);
      }
  
}
