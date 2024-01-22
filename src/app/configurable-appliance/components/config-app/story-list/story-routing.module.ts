import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoryList } from './story-list.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: StoryList }
	])],
	exports: [RouterModule]
})
export class StoryRoutingModule { }
