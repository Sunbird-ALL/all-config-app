import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-global-api-host',
  templateUrl: './global-api-host.component.html',
  styleUrls: ['./global-api-host.component.scss']
})
export class GlobalApiHostComponent implements OnInit {
  display: boolean = true;
  environmentForm: FormGroup;
  devUrl: string = environment.devPort;
  prodUrl: string = environment.prodPort;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ref: DynamicDialogRef,
    private contentService: ContentService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.environmentForm = this.fb.group({
      environment: ['', Validators.required]
    });
  }

  submitEnvironment() {
    this.loading = true;
    if (this.environmentForm.valid) {
      const selectedEnvironment = this.environmentForm.value.environment;
      this.contentService.getApiHost(selectedEnvironment);
      this.loading = false;
      this.ref.close(selectedEnvironment);
      this.router.navigate(['/content/story/list']);
    } else {
      this.loading = false;
      this.markFormGroupTouched(this.environmentForm);
    }
  }
  

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
