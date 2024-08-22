import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Message } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
  selector: 'app-add-udise-code',
  templateUrl: './add-udise-code.component.html',
  styleUrls: ['./add-udise-code.component.scss'],
 

})
export class AddUdiseCodeComponent {
  addUdiseForm: FormGroup;
  messages: Message[];

  constructor(
    public formBuilder: FormBuilder,
    public contentService : ContentService,
    public ref: DynamicDialogRef,
  ){
    
  }

  ngOnInit() {
    this.initializeAddForm();

  } 

  initializeAddForm() {
    this.addUdiseForm = this.formBuilder.group({
      school_name: [''],
      udise_code: [
        '', [Validators.required,
        Validators.minLength(11),
      Validators.maxLength(11),
      Validators.pattern(/^\d+$/)]
      ],
    });
}


  addUdiseCode() {
    if (this.addUdiseForm?.invalid) {
      const udiseCode = this.addUdiseForm?.controls['udise_code']?.value;
      
      if (udiseCode && udiseCode?.length < 11) {
        this.messages = [
          { severity: 'error', summary: 'UDISE Code Must be length of 11' }
        ];
      } else {
        this.messages = [
          { severity: 'error', summary: 'Add Required Data' }
        ];
      }
      return;
    }
    

    const body = {
      school_name: this.addUdiseForm.value.school_name,
      udise_code: this.addUdiseForm.value.udise_code,
    };

    this.contentService.addUdiseCode(body).subscribe({
      next: (response) => {
        if(response?.result === "udise_code is already exists"){
          this.messages = [
            { severity: 'error', summary: 'UDISE Code Already exists' }
          ];
        }else if (response.result) {
          this.ref.close(response.result);
        }

      },
      error: (error: any) => {
        this.messages = [
          { severity: 'error', summary: 'error' }
        ]
      }
    });
  }

  filterNumbersOnly(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const sanitizedValue = inputElement.value.replace(/[^0-9]/g, '');
    this.addUdiseForm.get('udise_code')?.setValue(sanitizedValue);
  }

  cancel() {
    this.ref.close();
}

}
