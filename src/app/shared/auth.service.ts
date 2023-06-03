import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  IsloggedIn(){
    // console.log(localStorage.getItem('token'))
    console.log(localStorage.getItem('userType'))
    if(localStorage.getItem('userType') == 'admin')
    return true;
    else
    return false;
    //return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token'); 
  }
}
