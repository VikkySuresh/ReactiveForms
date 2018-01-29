import { TestBed, inject } from '@angular/core/testing';

import { EmployeeService } from './employee.service';

import { Employee } from "../shared/employee.model";

describe('EmployeeService', () => {
let employees =[];
let mockEmployee: Employee, updatedEmployee: Employee;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService]
    });    
    mockEmployee = { "firstname": "ram", "lastname": "kumar", "age": "23"};
    updatedEmployee = { "firstname": "raman", "lastname": "kumar", "age": "23"}; 
  });

  it('should create Employee Service', inject([EmployeeService], (service: EmployeeService) => {
    expect(service).toBeTruthy();
  }));

  it('should have all CRUD functions defined',inject([EmployeeService], (service: EmployeeService)  => {
    expect(service.addNewEmployee).toBeDefined();
    expect(service.viewEmployeeDetails).toBeDefined();
    expect(service.removeEmployeeDetail).toBeDefined();
    expect(service.saveEmployeeDetails).toBeDefined();
    expect(service.editEmployeeDetail).toBeDefined();
  }));

  it('should add an employee record as expected and view all employee details',inject([EmployeeService], (service: EmployeeService)  => {
    this.employees = service.addNewEmployee(mockEmployee);
    this.employees = service.viewEmployeeDetails();
    expect(this.employees.length).toEqual(1);
    expect(this.employees[0].firstname).toEqual("ram");
  }));

  it('should remove an employee record',inject([EmployeeService], (service: EmployeeService)  => {
    this.employees = service.addNewEmployee(mockEmployee);
    this.employees = service.removeEmployeeDetail(0);
    expect(this.employees.length).toEqual(0);
  })); 

  it('should save an employee record',inject([EmployeeService], (service: EmployeeService)  => {
    this.employees = service.addNewEmployee(mockEmployee);
    this.employees = service.saveEmployeeDetails(0, updatedEmployee);
    expect(this.employees[0].firstname).toEqual("raman");
  })); 
});
