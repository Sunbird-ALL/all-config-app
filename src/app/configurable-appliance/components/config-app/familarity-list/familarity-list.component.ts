import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Message } from 'primeng/api';
import { Table } from 'primeng/table';
import { AppConfig } from 'src/app/configurable-appliance/interface/content.interface';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
  selector: 'app-familarity-list',
  templateUrl: './familarity-list.component.html',
  styleUrls: ['./familarity-list.component.scss']
})
export class FamilarityListComponent {
  messages: Message[] = [];
  targetList: any[] = [];
  loading: boolean = false;
  languageList = AppConfig.languages;
  familarityForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private contentService: ContentService,

  ) {}

  ngOnInit() {
    this.initializeAddForm();
  }

  initializeAddForm() {
    this.familarityForm = this.formBuilder.group({
      userID: ['', Validators.required],
      language: ['', Validators.required],

    });
  }

  searchTarget() {
    if (this.familarityForm.invalid) {
      this.messages = [
        { severity: 'error', summary: 'Add Required Data' }
      ];
      return;
    }

    const userID = this.familarityForm.value.userID;
    const language = this.familarityForm.value.language;

    this.contentService.searchFamiliarty(userID, language).subscribe((response) => {
      console.log(response);
      this.targetList = response;
      this.loading = false;

    }, (error: any) => {
      this.messages = [
        { severity: 'error', summary: 'error' }
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
    this.familarityForm.reset();
    table.clear();
  }
}
