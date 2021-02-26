import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';
import { TemplateDetails } from './admin.models';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private webApiService: WebApiService) { }

  getUsersList(apiURL:string, httpParams?: HttpParams): Observable<TemplateDetails[]> {
    return this.webApiService.baseHttpGetRequest(apiURL, httpParams)
  }
}
