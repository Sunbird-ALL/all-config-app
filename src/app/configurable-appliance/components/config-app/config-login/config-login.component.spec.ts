import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLoginComponent } from './config-login.component';

describe('ConfigLoginComponent', () => {
  let component: ConfigLoginComponent;
  let fixture: ComponentFixture<ConfigLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigLoginComponent]
    });
    fixture = TestBed.createComponent(ConfigLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
