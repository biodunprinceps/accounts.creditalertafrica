import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenserviceService } from '../services/tokenservice.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenservice: TokenserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.tokenservice.get();
    // const isLoggedIn = this.tokenservice.loggedIn();
    if(token){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
    });
    }
    return next.handle(request);
  }
}
