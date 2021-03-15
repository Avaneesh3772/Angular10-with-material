import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(protected http: HttpClient) { }

  baseHttpGetRequest(apiURL: string, httpParams?: HttpParams): Observable<any>{
      return this.http.get(apiURL, {params: httpParams})
                      .pipe(catchError(this.errorHandler));
  }

  baseHttpPostRequest(apiURL: string, body): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(apiURL, JSON.stringify(body), {headers: httpHeaders})
                    .pipe(catchError(this.errorHandler));
  }

  baseHttpPutRequest(apiURL: string, body): Observable<any> {
    let httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.put(apiURL, JSON.stringify(body), {headers: httpHeaders})
                    .pipe(catchError(this.errorHandler));
  }

  baseHttpDeleteRequest(apiURL: string, httpParams?: HttpParams): Observable<any>{
    return this.http.delete(apiURL, {params: httpParams})
                    .pipe(catchError(this.errorHandler));
}

  errorHandler(error: HttpErrorResponse) {
    return throwError(error || 'Service Error');
  }
}
