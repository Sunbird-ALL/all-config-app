import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WordSentenceComponent } from './word-sentence.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: WordSentenceComponent }
	])],
	exports: [RouterModule]
})
export class WordSentenceRoutingModule { }
