import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilarityListComponent } from './familarity-list.component';

describe('FamilarityListComponent', () => {
  let component: FamilarityListComponent;
  let fixture: ComponentFixture<FamilarityListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FamilarityListComponent]
    });
    fixture = TestBed.createComponent(FamilarityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
