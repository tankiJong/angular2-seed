import { ComponentModule } from '../components';
import { LoginModule } from './login/login.module';


import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    LoginModule,
    ComponentModule
  ]
})
export class ContainerModule { };
