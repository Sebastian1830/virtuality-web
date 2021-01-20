import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPatientPageComponent } from './register-patient-page.component';

describe('RegisterPatientPageComponent', () => {
  let component: RegisterPatientPageComponent;
  let fixture: ComponentFixture<RegisterPatientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPatientPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPatientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
