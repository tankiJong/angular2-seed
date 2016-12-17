import { ComponentModule, LoginFormComponent } from '../../components';
import { LoginComponent } from './login.component';

import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const loginRoute: Routes = [
  { path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [
    RouterModule.forChild(loginRoute),
    ComponentModule
  ],
  declarations: [
    LoginComponent,
  ],
})
export class LoginModule {}
