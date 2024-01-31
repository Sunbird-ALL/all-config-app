import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/configurable-appliance/guards/auth.service';
import { ContentService } from 'src/app/configurable-appliance/service/content.service';

@Component({
  selector: 'app-config-login',
  templateUrl: './config-login.component.html',
  styleUrls: ['./config-login.component.scss']
})
export class ConfigLoginComponent implements OnInit {
  loginForm: FormGroup;
  showPassword = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private contentService: ContentService
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
      const { username, password } = loginForm.value;
      this.contentService.getVirtualID(username, password).subscribe(
        (response: any) => {
          if (response.virtualID) {
            this.checkVirtualID(response.virtualID)
          }
        }
      );
    }
  }

  checkVirtualID(virtualID) {
    if (this.authService.checkVirtualID(virtualID)) {
      this.router.navigate(['/content/story/list']);
    } else {
      this.router.navigate(['/forbidden']);
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
