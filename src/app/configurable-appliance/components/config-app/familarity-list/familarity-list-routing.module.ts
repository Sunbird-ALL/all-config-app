import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FamilarityListComponent } from './familarity-list.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: FamilarityListComponent }
	])],
	exports: [RouterModule]
})
export class FamilarityListRoutingModule { }
