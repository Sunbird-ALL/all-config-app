import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddOrEditStoryComponent } from './add-or-edit-story/add-or-edit-story.component';
import { ContentService } from 'src/app/demo/service/content.service';
import { AddSentenceForStoryComponent } from './add-sentence-for-story/add-sentence-for-story.component';

@Component({
    templateUrl: './story-list.component.html',
    providers: [MessageService, ConfirmationService],
})
export class StoryList implements OnInit {
    storyList: any[] = [];
    loading: boolean = false;
    messages: Message[] = [];

    constructor(
        private contentService: ContentService,
        public ref: DynamicDialogRef,
        public dialogService: DialogService,
        private confirmationService: ConfirmationService,
    ) {}

    ngOnInit() {
        this.getStoriesList();
    }

    getStoriesList() {
        this.contentService.getStoriesList().subscribe(
            (response: any) => {
                if (response.status === 'success') {
                    this.storyList = response.data;
                    this.loading = false;
                }
            },
            (error) => {
                this.messages = [];
                this.messages = [
                    {
                        severity: 'error',
                        detail: error?.error?.params?.errmsg,
                    },
                ];
            }
        );
    }

    addMoreStory() {
        this.ref = this.dialogService.open(AddOrEditStoryComponent, {
            header: 'Add Stories',
            data: { mode: 'Add' },
            width: '40%',
            contentStyle: {
                overflow: 'auto',
            },
        });
        this.ref.onClose.subscribe((newStory: any) => {
            if (newStory) {
                this.storyList.push(newStory);
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Created',
                        detail: 'Story is Created',
                    },
                ];
            }
        });
    }
    addWord(wordAndSentenceData) {
        this.ref = this.dialogService.open(AddSentenceForStoryComponent, {
            header: 'Add Content',
            data: {
                mode: 'Add_Content',
                wordAndSentenceData: wordAndSentenceData,
            },
            width: '40%',
            contentStyle: {
                overflow: 'auto',
            },
        });
        this.ref.onClose.subscribe((addedData: any) => {
                if(addedData){
                    this.storyList.push(addedData);
                    this.messages = [];
                    this.messages = [
                        {
                            severity: 'info',
                            summary: 'Created',
                            detail: 'Content is Created',
                        },
                    ];
                }
        });
    }
    editStory(wordAndSentenceData) {
        this.ref = this.dialogService.open(AddOrEditStoryComponent, {
            header: 'Edit Story',
            data: {
                mode: 'Edit',
                wordAndSentenceData: wordAndSentenceData,
            },
            width: '40%',
            contentStyle: {
                overflow: 'auto',
            },
        });
        this.ref.onClose.subscribe((newOrganizationData: any) => {
            if(newOrganizationData){
                const index = this.storyList.findIndex((story) => story._id === newOrganizationData._id);
                  if (index !== -1) {
             this.storyList[index] = newOrganizationData;
    }
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Updated',
                        detail: 'Story is Updated',
                    },
                ];
            }
        });
    }
    deleteProduct(data) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.contentService
                .deleteCollection(data ?._id)
                .subscribe((e) => {
                    location.reload();
                });
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Confirmed',
                        detail: 'You have accepted',
                    },
                ];
            },
            reject: () => {
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Rejected',
                        detail: 'You have rejected',
                    },
                ];
            },
        });
    }

    clear(table: Table) {
        table.clear();
    }
}
