import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalApiHostComponent } from './global-api-host.component';

describe('GlobalApiHostComponent', () => {
  let component: GlobalApiHostComponent;
  let fixture: ComponentFixture<GlobalApiHostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalApiHostComponent]
    });
    fixture = TestBed.createComponent(GlobalApiHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
