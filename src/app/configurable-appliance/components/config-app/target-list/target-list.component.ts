import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  type: string;
  listType : string;
  loadingData : string;
  noDataFound : string;
  constructor(
    public formBuilder: FormBuilder,
    private contentService: ContentService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.type = paramMap.get('type');
      this.loadData();
    });
    this.initializeAddForm();
  }

  loadData() {
    if(this.targetList?.length > 0 || this.targetForm?.invalid) {
    this.targetForm.reset();
    this.targetList = [];
    }
    
    if (this.type === 'target') {
      this.listType = "Target List"
      this.loadingData = ' Loading Target ... Please wait.'
      this.noDataFound = 'No Target found'
    } else if (this.type === 'familarity') {
      this.listType = "Familarity List"
      this.loadingData = ' Loading Familarity ... Please wait.'
      this.noDataFound = 'No Familarity found'
    }
  }

  initializeAddForm() {
    this.targetForm = this.formBuilder.group({
      userID: ['', Validators.required],
        language: ['', Validators.required],
       
    });
}

  searchTarget() {
    if (this.targetForm.invalid) {
      this.messages = [
        { severity: 'error', summary: 'Add Required Data' }
      ];
      
      setTimeout(() => {
        this.messages = [];
      }, 2000);
    
      return;
    }

    const userID = this.targetForm.value.userID;
    const language = this.targetForm.value.language;

    if (this.type === 'target') {
      this.contentService.searchTarget(userID, language).subscribe((response) => {
        this.targetList = response;
        this.loading = false;
        if(response.length === 0) {
          this.messages = [
            { severity: 'error', summary: 'No Data Found' }
          ];
          setTimeout(() => {
            this.messages = [];
          }, 2000);
        }

      }, (error: any) => {
        this.messages = [
          { severity: 'error', summary: 'error' }
        ]
      });
    } else if (this.type === 'familarity') {
      this.contentService.searchFamiliarty(userID, language).subscribe((response) => {
        this.targetList = response;
        this.loading = false;
        if(response.length === 0) {
          this.messages = [
            { severity: 'error', summary: 'No Data Found' }
          ];
          setTimeout(() => {
            this.messages = [];
          }, 2000);
        }

      }, (error: any) => {
        this.messages = [
          { severity: 'error', summary: 'error' }
        ]
      });
    }
  }

  onChangeLanguage(){
    this.targetList = []
  }

clear(table : Table) {
  this.onChangeLanguage();
  this.targetForm.reset();
  table.clear();
}
}
