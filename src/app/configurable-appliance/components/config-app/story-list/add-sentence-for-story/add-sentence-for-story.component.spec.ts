import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSentenceForStoryComponent } from './add-sentence-for-story.component';

describe('AddSentenceForStoryComponent', () => {
  let component: AddSentenceForStoryComponent;
  let fixture: ComponentFixture<AddSentenceForStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSentenceForStoryComponent]
    });
    fixture = TestBed.createComponent(AddSentenceForStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
