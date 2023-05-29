import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = (new Date()).getTime();
    return next.handle(request).pipe(
      map(event => {
     if(event instanceof HttpResponse) {               // to handle only  event of http response in console
      const endTime = (new Date()).getTime();
      const difference = endTime - startTime; 
      console.log(event.url+ ' succeed in '+ difference +' milliseconds')
      // return event;
    }

    return event;
      })
    )
    
  }
}
