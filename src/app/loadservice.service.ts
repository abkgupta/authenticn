import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadserviceService {

  constructor(private httpclient: HttpClient) { }
  loaderb = new BehaviorSubject<Boolean>(false)
  
  getPosts(): Observable<any> {
    return this.httpclient.get("http://localhost:3000/RegisterUsers")
  }
  getcmnts():Observable<any> {
    return this.httpclient.get("http://localhost:3000/posts");
  }

}
