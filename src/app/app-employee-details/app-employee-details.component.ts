import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './app-employee-details.component.html',
  styleUrls: ['./app-employee-details.component.scss']
})
export class AppEmployeeDetailsComponent implements OnInit {
 employeeForm: FormGroup;
 employees = [];
 updateFlag:boolean;
  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }
  ngOnInit() {
  this.updateFlag = false;
  this.employeeForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.minLength(2)]],
    lastname: ['', [Validators.required, Validators.minLength(2)]],
    age: ['', [Validators.required]]
    })
  }
  onSubmit(employee) {
    this.employees = this.employeeService.addNewEmployee(employee);
    this.employeeForm.reset();
  }
  saveEmployee() {    
    this.employees = this.employeeService.saveEmployeeDetails(this.employeeService.employeeIndex, this.employeeForm.value);      
    this.employeeForm.reset();
  }
  setAction(event) {
    this.updateFlag = true;
  }
}
