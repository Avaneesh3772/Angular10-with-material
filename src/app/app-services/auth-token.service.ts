import { Injectable } from '@angular/core';
import { AuthToken } from '../app-constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  public token: string;

  constructor() { }

  getToken() {
    return this.token = AuthToken;
  }

  setTokenToSessionStorage(key: string, value: any) {
     sessionStorage.setItem(key, JSON.stringify(value));
  }

  getTokenToSessionStorage(key: string) {
    return sessionStorage.getItem(key);
 }

}
