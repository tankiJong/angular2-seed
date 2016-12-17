import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `<div>
  <button [routerLink]="[ '/login' ]">to login</button>
  <div>`,
})
export class AppComponent {
}
