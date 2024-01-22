import { Component } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { ContentService } from 'src/app/demo/service/content.service';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { AddWordSentencesComponent } from './add-word-sentences/add-word-sentences.component';

@Component({
    selector: 'app-word-sentence',
    templateUrl: './word-sentence.component.html',
    styleUrls: ['./word-sentence.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class WordSentenceComponent {
    editDialog: boolean;
    wordAndSentenceData: any[] = [];
    langData: any[] = [];
    loading: boolean = true;
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
        this.contentService.getWordSentenceList().subscribe(
            (response: any) => {
                if (response.status === 'success') {
                    this.wordAndSentenceData = response.data;
                        
                    // this.wordAndSentenceData.forEach((singleData: any) => {
                    //     var data = singleData.data[0];
                    //     for (var key in data) {
                    //         if (data.hasOwnProperty(key)) {
                    //             if (data[key].text) {
                    //                 this.langData.push({
                    //                     language: key,
                    //                     text: data[key].text,
                    //                     data: singleData,
                    //                 });
                    //             }
                    //         }
                    //     }
                    // });
                    // this.wordAndSentenceData = this.langData;
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

    deleteWorkAndSentence(data) {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.contentService
                    .deleteWordAndSentence(data?._id)
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

    hideDialog() {
        this.editDialog = false;
        location.reload();
    }

    addMoreWords() {
        this.ref = this.dialogService.open(AddWordSentencesComponent, {
            header: 'Add Word Or Sentence',
            data: { mode: 'Add' },
            width: '40%',
            contentStyle: {
                overflow: 'auto',
            },
        });
        this.ref.onClose.subscribe((data: any) => {
            
        });
    }

    editWorkAndSentence(wordAndSentenceData) {
        this.ref = this.dialogService.open(AddWordSentencesComponent, {
            header: 'Edit Word Or Sentence',
            data: {
                mode: 'Edit',
                wordAndSentenceData: wordAndSentenceData,
            },
            width: '40%',
            contentStyle: {
                overflow: 'auto',
            },
        });
        this.ref.onClose.subscribe((newWordData: any) => {
            if(newWordData){
                const index = this.wordAndSentenceData.findIndex((story) => story._id === newWordData._id);
                if (index !== -1) {
           this.wordAndSentenceData[index] = newWordData;
  }
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Updated',
                        detail: 'Content is Updated',
                    },
                ];
                
            }
        });
    }
  
    clear(table: Table) {
        table.clear();
    }
}
