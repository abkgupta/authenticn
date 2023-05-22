import { Injectable ,Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
// import { Observable } from 'rxjs';
import { AuthService } from './shared/auth.service';
import { Observable, finalize, map, tap } from 'rxjs';
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
  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const API_KEY= 'test123';
  //   const req = request.clone({
  //      setHeaders :{
  //         API_KEY,
  //      }
  //   })

  //  return next.handle(req); 
  // }
  //   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const startTime = (new Date()).getTime();
  //   return next.handle(request).pipe(
  //     map(event =>
  //       {
  //       if(event instanceof HttpResponse){
  //         const endTime = (new Date()).getTime();
  //         const difference = endTime -  startTime;
  //         console.log(event.url+' suuceed in '+ difference+' milliseconds')
  //         return event;     
  //       }
  //     })
  //   )
  // }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   const startTime = (new Date()).getTime();
  //   return next.handle(request).pipe(
  //     tap(event => {
  //       if (event instanceof HttpResponse) {
  //         const endTime = (new Date()).getTime();
  //         const difference = endTime -  startTime;
  //         console.log(event.url+' succeeded in '+ difference+' milliseconds');
  //       }
  //     })
  //   );
  // }



}
