import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrEditStoryComponent } from './add-or-edit-story.component';

describe('AddOrEditStoryComponent', () => {
  let component: AddOrEditStoryComponent;
  let fixture: ComponentFixture<AddOrEditStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddOrEditStoryComponent]
    });
    fixture = TestBed.createComponent(AddOrEditStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
