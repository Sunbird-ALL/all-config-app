import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GlobalConfigComponent } from './global-config.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: GlobalConfigComponent }
	])],
	exports: [RouterModule]
})
export class GlobalConfigRoutingModule { }
