import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordSentenceRoutingModule } from './word-sentence-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WordSentenceComponent } from './word-sentence.component';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AddWordSentencesComponent } from './add-word-sentences/add-word-sentences.component';
import { MessageService} from 'primeng/api';
import { MessageModule } from 'primeng/message';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        InputTextModule,
        ToggleButtonModule,
        RippleModule,
        MultiSelectModule,
        DropdownModule,
        ProgressBarModule,
        ToastModule,
		DialogModule,
		ConfirmDialogModule,
        MessageModule,
        ReactiveFormsModule,
        WordSentenceRoutingModule,
    ],
    declarations: [WordSentenceComponent, AddWordSentencesComponent],
    providers: [DialogService, DynamicDialogRef, MessageService],
})
export class WordSentenceModule {}
