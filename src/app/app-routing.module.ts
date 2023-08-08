import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';
import { EditPolicyComponent } from './edit-policy/edit-policy.component';

var login = true;

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'addcompany', component: AddCompanyComponent },
  { path: 'editcompany', component: EditCompanyComponent },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'editemployee', component: EditEmployeeComponent },
  { path: 'addpolicy', component: AddPolicyComponent },
  { path: 'editpolicy', component: EditPolicyComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

const routes2: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(
    login ? routes : [
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/login', pathMatch: 'full' },
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }