import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TargetListComponent } from './target-list.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TargetListComponent }
	])],
	exports: [RouterModule]
})
export class TargetListRoutingModule { }
