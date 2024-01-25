import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConfigComponent } from './global-config.component';

describe('GlobalConfigComponent', () => {
  let component: GlobalConfigComponent;
  let fixture: ComponentFixture<GlobalConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalConfigComponent]
    });
    fixture = TestBed.createComponent(GlobalConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
