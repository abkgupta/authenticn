import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadserviceService } from './loadservice.service';
@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private ds: LoadserviceService) {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //  const API_KEY = 'test123'
  //  const req = request.clone({
    
  //   setHeaders: {
  //     API_KEY,
       
  //   }
  //  })
  //  console.log(request)
  //   return next.handle(req);
  // }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.ds.loaderb.next(true);
     return next.handle(req).pipe(
      tap(event => {
        setTimeout(() => {
          this.ds.loaderb.next(false);
        }, 3000);
        
        console.log(event)
        if(event.type == HttpEventType.Response) {
          if(event.status == 200 || event.status== 401) {
            
          }
        }
      })
     )
   }
}
