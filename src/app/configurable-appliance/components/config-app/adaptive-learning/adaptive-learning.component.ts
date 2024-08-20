import { Component, OnInit, ViewChild } from '@angular/core';
import {  ConfirmationService, Message ,MessageService } from 'primeng/api';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';
import { AddUdiseCodeComponent } from './add-udise-code/add-udise-code.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-adaptive-learning',
  templateUrl: './adaptive-learning.component.html',
  styleUrls: ['./adaptive-learning.component.scss'],
  providers: [MessageService,ConfirmationService],
})
export class AdaptiveLearningComponent implements OnInit{
  messages: Message[] = [];
  adaptiveLists: any[] = [];
  loading: boolean = false;
  @ViewChild('dt') dataTable: Table;

  ngOnInit() {
    this.getUdiseCode();
}

constructor(
  private contentService: ContentService,
  public ref: DynamicDialogRef,
  public dialogService: DialogService,
  private confirmationService : ConfirmationService
){
  
}

getUdiseCode(){
  this.contentService.getUdiseCode().subscribe({
   next :  (response: any) => {
        if (response?.result?.length > 0) {
            this.adaptiveLists = response.result;
            this.loading = false;
        }
    },
   error: (error) => {
        this.messages = [];
        this.messages = [
            {
                severity: 'error',
                detail: error?.error?.params?.errmsg,
            },
        ];
    }
});
}

addMoreUdiseCode() {
  this.ref = this.dialogService.open(AddUdiseCodeComponent, {
      header: 'Add Udise Code',
      data: { mode: 'Add' },
      width: '40%',
      contentStyle: {
          overflow: 'auto',
      },
  });
  this.ref.onClose.subscribe((newUdise: any) => {
      if (newUdise) {
          this.adaptiveLists.push(newUdise);
          this.messages = [];
          this.messages = [
              {
                  severity: 'info',
                  summary: 'Created',
                  detail: 'Story is Created',
              },
          ];
      this.dataTable.reset(); 
      this.dataTable.value = this.adaptiveLists;
      }
  });
}
deleteUdise(data) {
  this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.contentService
          .deleteUdiseCode(data ?.udise_code)
          .subscribe((e) => {
              data.deleted = true;
          });
          this.messages = [];
          this.messages = [
              {
                  severity: 'info',
                  summary: 'Confirmed',
                  detail: 'Udise Code deleted',
              },
          ];
      },
      reject: () => {
          this.messages = [];
          this.messages = [
              {
                  severity: 'error',
                  summary: 'Rejected',
                  detail: 'You have rejected',
              },
          ];
      },
  });
}
}
