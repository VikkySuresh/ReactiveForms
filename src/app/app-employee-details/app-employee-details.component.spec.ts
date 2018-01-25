import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEmployeeDetailsComponent } from './app-employee-details.component';

describe('AppEmployeeDetailsComponent', () => {
  let component: AppEmployeeDetailsComponent;
  let fixture: ComponentFixture<AppEmployeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmployeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
