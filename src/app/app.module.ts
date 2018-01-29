import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; 
import { AppComponent } from './app.component';
import { AppEmployeeDetailsComponent } from './app-employee-details/app-employee-details.component';
import { Employee } from './shared/employee.model';
import { EmployeeService } from './shared/employee.service';
import { AppEmployeeListComponent } from './app-employee-list/app-employee-list.component';

const appRoutes: Routes = [{
    path: 'employeeform',
    component: AppEmployeeDetailsComponent
    },{
    path: '',
    redirectTo: '/employeeform',
    pathMatch: 'full'
    }];
@NgModule({
  declarations: [
    AppComponent,
    AppEmployeeDetailsComponent,
    AppEmployeeListComponent
  ],
  imports: [   
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ EmployeeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
