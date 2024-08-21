import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/configurable-appliance/guards/auth.service';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';
import { GlobalApiHostComponent } from '../global-api-host/global-api-host.component';

@Component({
  selector: 'app-config-login',
  templateUrl: './config-login.component.html',
  styleUrls: ['./config-login.component.scss']
})
export class ConfigLoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private contentService: ContentService,
    private dialogService: DialogService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  login(loginForm) {
    if (this.loginForm.valid) {
      this.loading = true;
      const { username, password } = loginForm.value;
      this.contentService.getVirtualID(username, password).subscribe({
       next : (response: any) => {
          this.loading = false; 
          if (response?.result?.virtualID) {
            this.checkVirtualID(Number(response?.result?.virtualID));
          }
        },
        error :(error) => {
          this.loading = false;
          console.error('API call failed:', error);
        }
    });
    }
  }

  checkVirtualID(virtualID) {
    if (this.authService.checkVirtualID(virtualID)) {
      const ref: DynamicDialogRef = this.dialogService.open(GlobalApiHostComponent, {
        header: 'Select Environment',
        closable: true, 
        contentStyle: {
          'font-size': '28px'         }
      });
    
    } else {
      this.router.navigate(['/forbidden']);
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
