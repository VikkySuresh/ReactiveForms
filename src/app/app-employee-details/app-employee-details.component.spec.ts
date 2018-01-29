import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from "@angular/platform-browser";
import { AppEmployeeDetailsComponent } from './app-employee-details.component';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

describe('AppEmployeeDetailsComponent', () => {
  let component: AppEmployeeDetailsComponent;
  let fixture: ComponentFixture<AppEmployeeDetailsComponent>;
  let employeeService: EmployeeService;
  let mockEmployeeData: Employee = {"firstname" : "ram", "lastname" : "kumar", "age" : "24"};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEmployeeDetailsComponent ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [EmployeeService]     
    })
    .compileComponents();
  }));

  beforeEach(() => {
    employeeService = TestBed.get(EmployeeService);
    fixture = TestBed.createComponent(AppEmployeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create EmployeeDetails Component', () => {
    expect(component).toBeTruthy();
  });

  it('should define all methods in the Component', () => {
    expect(component.saveEmployee).toBeDefined();
    expect(component.onSubmit).toBeDefined();
    expect(component.setAction).toBeDefined();
  });

  it('should count the totl number of form fields', () => {
   let inputfields = fixture.nativeElement.querySelectorAll('form.form-horizontal input');
   expect(inputfields.length).toBe(3);
  });

  it('should count the totl number of button fields', () => {
   let addEmpbtn = fixture.nativeElement.querySelectorAll('form.form-horizontal button');
   expect(addEmpbtn.length).toBe(1);
  });

 it('should invalid form when empty', () => {
   expect(component.employeeForm.valid).toBeFalsy();
  });
 
 it('form empty fields validity', () => {
   let firstname = component.employeeForm.controls['firstname'];
   firstname.setValue('a')
   let lastname = component.employeeForm.controls['lastname'];
   lastname.setValue('');
   let age = component.employeeForm.controls['age'];
   age.setValue('34');
  });

 it('should have valid form data', () => {
    component.employeeForm.setValue(mockEmployeeData);
    expect(component.employeeForm.valid).toBe(true); 
 }); 
 
 it('should add employee details to table', () => {
    component.employeeForm.setValue(mockEmployeeData);
    component.onSubmit(mockEmployeeData);
 });
});
