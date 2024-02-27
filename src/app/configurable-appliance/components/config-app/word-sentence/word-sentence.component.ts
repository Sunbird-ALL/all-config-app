import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';
import { MessageService, ConfirmationService, Message } from 'primeng/api';
import { AddWordSentencesComponent } from './add-word-sentences/add-word-sentences.component';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';

@Component({
    selector: 'app-word-sentence',
    templateUrl: './word-sentence.component.html',
    styleUrls: ['./word-sentence.component.scss'],
    providers: [MessageService, ConfirmationService],
})
export class WordSentenceComponent implements AfterViewInit {
    editDialog: boolean;
    wordAndSentenceData: any[] = [];
    langData: any[] = [];
    loading: boolean = true;
    messages: Message[] = [];
    collectionId: string;
    @ViewChild('dt2') dataTable: Table;
    @ViewChild('collectionIdFilter') collectionIdFilter: any;
    editingWordAndSentence: any = null;
    contentTypeOptions: SelectItem[] = AppConfig.contentTypeListForFilter
    languageOptions:SelectItem[]=AppConfig.languages
    showDropdown = false;
    
    constructor(
        private contentService: ContentService,
        public ref: DynamicDialogRef,
        public dialogService: DialogService,
        private confirmationService: ConfirmationService,
        private route: ActivatedRoute

    ) {}

    ngOnInit() {
        this.getStoriesList();
        this.route.queryParams.subscribe(params => {
            this.collectionId = params['collectionId'];
        });
    }
    
    toggleDropdown(event: Event) {
        event.stopPropagation(); // Prevent the dropdown from immediately closing
        this.showDropdown = !this.showDropdown;
        console.log(this.showDropdown);
        
    }

    ngAfterViewInit() {
        if (this.collectionId) {
            setTimeout(() => {
                this.dataTable.filter(this.collectionId, 'collectionId', 'contains');
            });
        }
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
                        this.wordAndSentenceData = this.wordAndSentenceData.filter(story => story._id !== data?._id);
                        this.dataTable.reset();
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
        // location.reload();
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
        this.ref.onClose.subscribe((newWord: any) => {
            if (newWord) {
                this.wordAndSentenceData.push(newWord);
                this.messages = [];
                this.messages = [
                    {
                        severity: 'info',
                        summary: 'Created',
                        detail: 'Content is Created',
                    },
                ];
            this.dataTable.reset(); 
            this.dataTable.value = this.wordAndSentenceData;
            }
        });
    }

      editContent(wordAndSentenceData) {
        if (this.editingWordAndSentence) {
            this.editingWordAndSentence.isEditing = false;
            this.editingWordAndSentence = null;
        }
        
            const body = {
                collectionId: "",
                name: wordAndSentenceData.name,
                contentType: wordAndSentenceData.contentType,
                image: "",
                language: wordAndSentenceData.language,
                status: "live",
                contentSourceData : [
                    {
                        language: wordAndSentenceData.language,
                        audioUrl: "",
                        text : wordAndSentenceData.contentSourceData[0].text,
                    }
                ]
                 
              };
        
        this.contentService.editMoreWords(body,wordAndSentenceData._id).subscribe(
            (response) => {
                if(response.updated){
                    wordAndSentenceData.isEditing = false;
                    this.editingWordAndSentence = null;
                }
            },
            (error: any) => {
                this.messages = [
                    { severity: 'error', summary: 'Please fill all fields' }
                ];
            }
        );
    }
  
    clear(table: Table) {
        table.clear();
    }

  toggleEdit(wordAndSentence: any): void {
    if (!this.editingWordAndSentence) {
        this.editingWordAndSentence = { ...wordAndSentence };
        wordAndSentence.isEditing = true;
    }
  }
}
