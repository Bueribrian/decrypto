import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.handleHttpError(error);
 
        return throwError(error);
      })
    );
  }

  private handleHttpError(error: HttpErrorResponse): void {
    let errorMessage = `Code: ${error.status}, Message: ${error.error.error}`

    // Front error
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error}`;
    }

    if(error.status === 0){
      errorMessage = `Code: 429, Message: Too many requests`
    }

    this.snackBar.open(errorMessage, 'Cerrar', {
      duration: 10000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar'],
    });
  }
}