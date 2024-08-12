import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamilarityListComponent } from './familarity-list.component';
import { FamilarityListRoutingModule } from './familarity-list-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { StoryRoutingModule } from '../story-list/story-routing.module';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [FamilarityListComponent],
  imports: [
    CommonModule,
    FamilarityListRoutingModule,
    DialogModule,
    ConfirmDialogModule,
    MessageModule,
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
    MessageModule,
    ReactiveFormsModule,
    FileUploadModule,
  ],
  providers: [DialogService, DynamicDialogRef, MessageService],

})
export class FamilarityModule { }
