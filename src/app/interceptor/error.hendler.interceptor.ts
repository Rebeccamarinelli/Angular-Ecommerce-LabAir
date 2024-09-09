import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError, finalize } from 'rxjs';
import { Router } from '@angular/router';
import { SpinnerService } from '../services/spinner.service';
import { PopupService } from '../services/popup.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private router: Router, private spinner:SpinnerService, private popupService:PopupService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinner.showSpinner()
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        // Gestione dei diversi codici di errore
        if (error.status === 0) {
         this.popupService.showPopup('Errore', 'errore di rete (0).');
         this.router.navigate(['/home'])
        }else if(error.statusText === 'Bad Request' && error.status === 400){
          this.popupService.showPopup('Errore', 'Email o Password non corrette (400)');
          this.router.navigate([this.router.url])
         }else if (error.status === 400) {
           this.popupService.showPopup('Errore', 'Richiesta errata (400)');
           this.router.navigate(['/home'])
        } else if (error.status === 401) {
          this.popupService.showPopup('Errore', 'Accesso non autorizzato (401)');
          this.router.navigate(['auth', 'login']);
        } else if (error.status === 403) {
          this.popupService.showPopup('Errore', 'Richiesta non concessa (403)');
          this.router.navigate(['/home'])
        } else if (error.status === 500) {
          this.popupService.showPopup('Errore', 'Errore del Server (500)');
          this.router.navigate(['/home'])
        } else {
          this.popupService.showPopup('Errore', `Errore sconosciuto: ${error.status}.`);
          this.router.navigate(['/home'])
        }

        console.error(errorMessage);

        // Ritorna un errore che può essere gestito dal chiamante
        return throwError(() => new Error(errorMessage));
        
      }),
      finalize(() => {
        // Nascondi lo spinner quando la richiesta è terminata (successo o errore)
        this.spinner.hideSpinner();
      })
      
    );
  }
}
