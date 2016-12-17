import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable'
import 'rxjs/add/operator/map';
import { AppConfig, appConfig } from '../../constants/app-config';

export class User{
  constructor(
    public name: string,
    public uuid: string
    ){}
}


@Injectable()
export class UserService{
  constructor(@Inject(appConfig) private config: AppConfig, private http: Http){
  }

  login(username: string, password:string): Observable<User>{
    const body = {
      username,
      password,
    };
    return this.http.post(`${this.config.apiUrl}/login`, { body }).map((r: Response) => r.json().data as User);
  }

  logout(): Observable<Boolean>{
    return this.http.get(`${this.config.apiUrl}/logout`).map((r: Response) => r.json().data as Boolean);
  }
}
