import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppEmployeeDetailsComponent } from './app-employee-details/app-employee-details.component';
import { Employee } from './shared/employee.model';
import { EmployeeService } from './shared/employee.service';
import { AppEmployeeListComponent } from './app-employee-list/app-employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEmployeeDetailsComponent,
    AppEmployeeListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
