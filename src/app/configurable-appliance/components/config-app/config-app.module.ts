import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigAppRoutingModule } from './config-app-routing.module';
import { FamilarityListComponent } from './familarity-list/familarity-list.component';

@NgModule({
	imports: [
		CommonModule,
		ConfigAppRoutingModule
	],
	declarations: [
    FamilarityListComponent
 ]
})
export class ConfigAppModule { }
