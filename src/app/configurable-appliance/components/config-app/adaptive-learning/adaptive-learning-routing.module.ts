import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdaptiveLearningComponent } from './adaptive-learning.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AdaptiveLearningComponent }
	])],
	exports: [RouterModule]
})
export class AdaptiveLearningRoutingComponent { }
