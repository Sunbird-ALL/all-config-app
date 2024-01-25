import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message, MessageService } from 'primeng/api';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FileUpload } from 'primeng/fileupload';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { AudioService } from 'src/app/configurable-appliance/service/audio.service';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
    selector: 'app-add-sentence-for-story',
    templateUrl: './add-sentence-for-story.component.html',
    styleUrls: ['./add-sentence-for-story.component.scss'],
    providers: [MessageService],

})
export class AddSentenceForStoryComponent implements OnInit {
    data: any;
    mode: 'Add_Content' | 'Edit';
    storyDetailData: any;
    ContentForm: FormGroup;
    editContentForm: FormGroup;
    messages!: Message[];
    contentTypeList = AppConfig.contentTypeList;
    uploadedImage: any;

    private audioSubscription: Subscription | undefined;
    isRecording = false;
    isPlaying = false;
    progressValue = 0;
    currentTime = '0:00';
    duration = '0:00';

    constructor(
        public formBuilder: FormBuilder,
        public ref: DynamicDialogRef,
        public dialogConfig: DynamicDialogConfig,
        private contentService: ContentService,
        private audioService: AudioService,
        private messageService: MessageService,
        private router: Router

    ) {
        this.data = this.dialogConfig.data;
        this.mode = this.data.mode;
        this.storyDetailData = this.data.wordAndSentenceData;
    }

    ngOnInit() {
        if(this.data.mode === 'Edit'){
            this.initializeEditForm()
            this.editContentForm.patchValue({
                contentType:  this.storyDetailData.category
              });
      }
        this.initializeAddForm();
        this.ContentForm.patchValue({
            contentType: this.contentTypeList[0].value 
          });
        
          
    }

    initializeEditForm() {
        this.editContentForm = this.formBuilder.group({
            collectionId: [
                this.storyDetailData?.collectionId,
                Validators.required,
            ],
            contentType: [this.storyDetailData?.category, Validators.required],
            contentText: [this.storyDetailData?.contentSourceData[0].text || '', Validators.required],
            contentAudio: [''],
        });
    }

    initializeAddForm() {
        this.ContentForm = this.formBuilder.group({
            collectionId: [
                this.storyDetailData?.collectionId,
                Validators.required,
            ],
            contentType: ['', Validators.required],
            contentText: ['', Validators.required],
            contentAudio: [''],
        });
    }

    cancel() {
        this.ref.close();
    }

    navigateToSomeRoute() {
      this.router.navigate(['/content/story/list']);
    }

    editContent() {
        if (this.editContentForm.invalid) {
            this.messages = [
            { severity: 'error', summary: 'Add Required Data' }

            ];
            return;
        }
            
        const body = {
            publisher:this.storyDetailData.data.publisher,
            name: this.storyDetailData.data.name,
            contentType: "Sentence",
            image: ' ',
            status: 1,
            collectionId: this.editContentForm.value.collectionId ,
            data: [
                {
                    [this.storyDetailData.language]: {
                        text: this.editContentForm.value.contentText,
                    },
                },
            ],
        };
        
        this.contentService.editMoreWords(body,this.storyDetailData.data._id).subscribe(
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

    addContent() {
            if (this.ContentForm.invalid) {
                this.messages = [
                { severity: 'error', summary: 'Add Required Data' }

                ];
                return;
            }
            const body = {
                collectionId: this.ContentForm.value.collectionId ,
                name: this.storyDetailData.name,
                contentType: this.ContentForm.value.contentType,
                imageUrl: '',
                status: this.storyDetailData.status,
                publisher: this.storyDetailData.author,
                language: this.storyDetailData.language,
                contentSourceData: [
                    {
                        language: this.storyDetailData.language,
                         audioUrl: "",
                         text: this.ContentForm.value.contentText
                    },
                ],
                contentIndex: 1,
                tags: []
            };
            
            this.contentService.addMoreWords(body).subscribe(
                (response) => {
                    if(response.status === 'success'){
                     this.ref.close(response.data);
                    }
                },
                (error: any) => {
                    this.messages = [
                        { severity: 'error', summary: '' }
                    ];
                }
            );
    }

    
    startRecording() {
        this.audioService.startRecording();
    }

    stopRecording() {
        this.audioService.stopRecording();
    }

    // handleFileInput(event: any) {
    //     const file = event.target.files[0];
    //     if (file) {
    //         this.audioService.playAudio(URL.createObjectURL(file));
    //     }
    // }

    get recordButtonLabel(): string {
        return this.isRecording ? 'Stop Recording' : 'Record';
    }

    playRecorded() {
        // Assuming you have stored the recorded audio in the service
        // Adjust the logic accordingly in your actual implementation
        //   this.playAudio(/* recordedAudioUrl */);
    }

    playUploaded() {
        // Assuming you have stored the uploaded audio in the service
        // Adjust the logic accordingly in your actual implementation
        //  this.playAudio(/* uploadedAudioUrl */);
    }

    playAudio(audioUrl: string) {
        if (this.audioSubscription) {
            this.audioSubscription.unsubscribe();
        }

        this.audioSubscription = this.audioService
            .playAudioWithProgress(audioUrl)
            .subscribe(
                (event) => {
                    if (event.type === 'timeupdate') {
                        this.progressValue =
                            (event.currentTime / event.duration) * 100;
                        this.currentTime = this.formatTime(event.currentTime);
                        this.duration = this.formatTime(event.duration);
                    } else if (event.type === 'ended') {
                        this.isPlaying = false;
                        this.progressValue = 0;
                        this.currentTime = '0:00';
                    }
                },
                (error) => {
                    console.error('Error playing audio:', error);
                }
            );

        this.isPlaying = true;
    }

    ngOnDestroy() {
        if (this.audioSubscription) {
            this.audioSubscription.unsubscribe();
        }
    }

    private formatTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    handleFileInput(event: any) {
      const fileUpload: FileUpload = event.files && event.files[0];
      if (fileUpload) {
        const file: any = fileUpload;
  
        if (file) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.uploadedImage = e.target.result;
          };
          reader.readAsDataURL(file);
  
          this.messageService.add({
            severity: 'info',
            summary: 'File Uploaded',
            detail: `${file.name} is uploaded`,
          });
        }
      }
    }

    onAudioUpload(event: any) {
      const fileUpload: FileUpload = event.files && event.files[0];
      if (fileUpload) {
        const audioFile: any = fileUpload;
        // Handle the audio file as needed
        console.log('Uploaded audio file:', audioFile);
      }
    }
  
}