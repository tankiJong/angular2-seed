import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';

import { AppConfig, appConfig } from '../../constants/app-config';
import { userActions as types } from './user.action';

export interface User {
  name: string;
  uuid: string;
}


@Injectable()
export class UserEffects {
  @Effect() login$ = this.actions$
    .ofType(types.login)
    .map(action => action.payload)
    .switchMap(({username, password}) => this.login(username, password));

  @Effect() logout$ = this.actions$
    .ofType(types.logout)
    .switchMap(() => this.logout());

  constructor(
    @Inject(appConfig) private config: AppConfig,
    private http: Http,
    private actions$: Actions) {
  }

  login(username: string, password: string): Observable<User> {
    console.log('called login');
    // return Observable.of({name: '1', uuid: '2'} as User);
    const body = {
      username,
      password,
    };
    return this.http.post(`${this.config.apiUrl}/login`, { body }).map((r: Response) => r.json().data as User);
  }

  logout(): Observable<Boolean> {
    console.log('called logout');
    return this.http.get(`${this.config.apiUrl}/logout`).map((r: Response) => r.json().data as Boolean);
  }

}
