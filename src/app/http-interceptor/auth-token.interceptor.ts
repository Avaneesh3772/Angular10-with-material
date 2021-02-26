import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, finalize, retry} from 'rxjs/operators';
import { AuthTokenService } from '../app-services/auth-token.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(private authTokenService : AuthTokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const reqestWithAuthToken = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authTokenService.getTokenToSessionStorage('token')}`
      }
    });

    return next.handle(reqestWithAuthToken).pipe(
        // Retry on failure
        retry(2),

        // Handle errors
        catchError((error: HttpErrorResponse) => {
          // TODO: Add error handling logic here
          alert(`HTTP Error: ${request.url}`);
          console.log('error', error);
          return throwError(error);
        }),

        // PROFILING
        finalize(() => {
          const profilingMsg = `${request.method} "${request.urlWithParams}"`;
          console.log(profilingMsg);
        })
    );
  }
}
