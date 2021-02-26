import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';


@Injectable({
  providedIn: 'root'
})
export class UserAuthorizationService {

  constructor(private http: HttpClient, private webApiService: WebApiService) { }


  getAppConfigData(apiURL:string, httpParams?: HttpParams): Observable<any[]> {
    return this.webApiService.baseHttpGetRequest(apiURL, httpParams)
  }

}
