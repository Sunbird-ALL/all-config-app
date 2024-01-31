import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigLoginComponent } from './config-login.component';
import { ConfigLoginRoutingComponent } from './config-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [ConfigLoginComponent],
    imports: [
        CommonModule,
        ConfigLoginRoutingComponent,
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        ButtonModule,
    ],
    providers: [],
})
export class ConfigLoginModule {}
