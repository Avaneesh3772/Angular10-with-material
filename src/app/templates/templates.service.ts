import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';
import { CommentList, PostList } from './template.models';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  constructor(private webApiService: WebApiService) { }

  getAllTemplateData(apiURL: string, httpParams?: HttpParams): Observable<PostList[]> {
      return this.webApiService.baseHttpGetRequest(apiURL, httpParams);
  }

  postNewTemplateData(apiURL:string, postBody: PostList): Observable<PostList> {
    return this.webApiService.baseHttpPostRequest(apiURL, postBody);
  }

  updateNewTemplateData(apiURL:string, updateBody:PostList): Observable<PostList> {
    return this.webApiService.baseHttpPutRequest(apiURL, updateBody);
  }

  deleteTemplateData(apiURL:string, httpParams?: HttpParams): Observable<PostList> {
    return this.webApiService.baseHttpDeleteRequest(apiURL, httpParams);
  }

  getAllCommentsData(apiURL: string, httpParams?: HttpParams): Observable<CommentList[]> {
    return this.webApiService.baseHttpGetRequest(apiURL, httpParams);
  }

}
