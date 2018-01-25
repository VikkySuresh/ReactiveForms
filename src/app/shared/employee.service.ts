import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
	employees = [];
  employeeIndex: number;
  constructor() { }
  addNewEmployee(employee) {
  	this.employees.push(employee);
  	return this.employees;
  }
  viewEmployeeDetails() {
    return this.employees;
  }
  removeEmployeeDetail(index) {
   this.employees.splice(index, 1);
   return this.employees;
  }
  saveEmployeeDetails(index, updatedEmployee) {
   this.employees[index] = updatedEmployee;
   return this.employees;
  }
  editEmployeeDetail(index, employeeForm) {
    this.employeeIndex = index;
    employeeForm.setValue(this.employees[index]);
  }
}
