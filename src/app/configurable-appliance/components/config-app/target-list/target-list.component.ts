import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
  selector: 'app-target-list',
  templateUrl: './target-list.component.html',
  styleUrls: ['./target-list.component.scss']
})
export class TargetListComponent {
  messages: Message[] = [];
  targetList: any[] = [];
  loading: boolean = false;
  languageList = AppConfig.languages;
  targetForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private contentService: ContentService,
  ){}

  ngOnInit(){
    this.initializeAddForm();
  }

  initializeAddForm() {
    this.targetForm = this.formBuilder.group({
      userID: ['', Validators.required],
        language: ['', Validators.required],
       
    });
}

searchTarget(){
  if (this.targetForm.invalid) {
    this.messages = [
      { severity: 'error', summary: 'Add Required Data' }
    ];
    return;
  }

  const userID = this.targetForm.value.userID;
  const language = this.targetForm.value.language;

  this.contentService.searchTarget(userID,language).subscribe((response) => {
    console.log(response);
    this.targetList = response;
    this.loading = false;
    
}, (error: any) => {
  this.messages = [
    { severity: 'error', summary: 'error'}
  ]
});
}

clearAllValues() {
  this.contentService.searchTarget(null,null).subscribe((response) => {
    console.log(response);
    this.targetList = response;
    this.loading = false;
    
}, (error: any) => {
  this.messages = [
    { severity: 'error', summary: 'error'}
  ]
});
}
clear(table : Table) {
  this.clearAllValues();
  this.targetForm.reset();
  table.clear();
}
}
