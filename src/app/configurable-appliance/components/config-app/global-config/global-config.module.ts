import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalConfigComponent } from './global-config.component';
import { GlobalConfigRoutingModule } from './global-config-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';

@NgModule({
    declarations: [GlobalConfigComponent],
    imports: [
        TableModule,
        RatingModule,
        ButtonModule,
        SliderModule,
        RippleModule,
        ProgressBarModule,
        DialogModule,
        ConfirmDialogModule,
        FileUploadModule,

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        InputTextareaModule,
        InputTextModule,
        GlobalConfigRoutingModule,
        ToggleButtonModule,
        SelectButtonModule,
        MessageModule,
        ToastModule,
    ],
    providers: [MessageService],
})
export class GlobalConfigModule {}
