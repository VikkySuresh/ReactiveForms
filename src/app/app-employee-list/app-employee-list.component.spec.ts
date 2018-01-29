import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppEmployeeListComponent } from './app-employee-list.component';
import { EmployeeService } from "../shared/employee.service";

describe('AppEmployeeListComponent', () => {
  let component: AppEmployeeListComponent;
  let fixture: ComponentFixture<AppEmployeeListComponent>;
  let employeeService: EmployeeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmployeeListComponent ],
      providers: [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    employeeService = TestBed.get(EmployeeService);
    fixture = TestBed.createComponent(AppEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EmployeeListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display count of columns in table', () => {
   let ths = fixture.nativeElement.querySelectorAll('table th');
   expect(ths).toBeTruthy();
   expect(ths.length).toBe(4);
  });

  it('should update the employeeDetails',() => {
   spyOn(component, 'editEmployee');
   component.editEmployee(0);
   expect(component.editEmployee).toHaveBeenCalled();
  });

  it('should remove the employeedetail ',() => {
   spyOn(component, 'removeEmployee');
   component.removeEmployee(0);
   expect(component.removeEmployee).toHaveBeenCalled();
  });
});
