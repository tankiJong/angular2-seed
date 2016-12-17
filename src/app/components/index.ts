import { LoginFormComponent } from './login-form/login-form.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    LoginFormComponent,
  ],
  exports: [
    LoginFormComponent,
  ]
})
export class ComponentModule {};

export { LoginFormComponent } from './login-form/login-form.component';
