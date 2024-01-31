import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ConfigLoginComponent} from './config-login.component'

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ConfigLoginComponent }
	])],
	exports: [RouterModule]
})
export class ConfigLoginRoutingComponent { }
