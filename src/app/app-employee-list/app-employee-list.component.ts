import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../shared/employee.model'
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './app-employee-list.component.html',
  styleUrls: ['./app-employee-list.component.scss']
})
export class AppEmployeeListComponent implements OnInit {
 @Input() employees;
 @Input() employeeForm;
 @Output('update')
  update: EventEmitter<any> = new EventEmitter<any>();
  constructor(private employeeService: EmployeeService) { }
  ngOnInit() {
  }
  removeEmployee(index) {
    this.employees = this.employeeService.removeEmployeeDetail(index);    
  }  
  editEmployee(index) {  
    this.update.emit();
    this.employeeService.editEmployeeDetail(index, this.employeeForm);  
  }
}
