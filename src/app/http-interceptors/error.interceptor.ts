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
    let errorMessage = `Código de error: ${error.status}, Mensaje: ${error.message}`

    // TODO: MEJORAR EL MANEJO DE ERROR
    // Sobrescribo, error del lado del cliente
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error}`;
    }

    console.log(error)
    if(error.status === 0){
      errorMessage = `Error: too many requeqst`;
    }

    this.snackBar.open(errorMessage, 'Cerrar', {
      duration: 10000,
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      panelClass: ['error-snackbar'],
    });
  }
}