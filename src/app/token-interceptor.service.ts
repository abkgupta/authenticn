import { Injectable ,Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
// import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }) {
     let authservice = this.injector.get(AuthService)
    let tokenreq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authservice.getToken()}`
        }
      })
      return next.handle(tokenreq)
  }
}
