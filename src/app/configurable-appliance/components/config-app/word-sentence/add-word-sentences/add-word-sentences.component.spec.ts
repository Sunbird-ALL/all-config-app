import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWordSentencesComponent } from './add-word-sentences.component';

describe('AddWordSentencesComponent', () => {
  let component: AddWordSentencesComponent;
  let fixture: ComponentFixture<AddWordSentencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWordSentencesComponent]
    });
    fixture = TestBed.createComponent(AddWordSentencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
