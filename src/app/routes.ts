import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app';

@Component({
  selector: 'froginn-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: AppComponent
  }
];

export const routing = RouterModule.forRoot(routes);
