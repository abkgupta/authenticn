import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup
  // userService: any; 
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.http.get<any>("http://localhost:3000/RegisterUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          // user.email!=null && user.password!=null || user.email!="" && user.password!=""
          alert("Login Successfull!!");
          // console.log("window location ", window.location)
          // localStorage.setItem('token', "gegegmk9f6f4r4");  // new line local storage
           console.warn(this.loginForm.value)
          // localStorage.setItem('token',"sdkknkvnkfvkvokdvndlkvmdk")
          this.loginForm.value.email=="sachind@ho.com"? localStorage.setItem('userType','admin') : localStorage.setItem('userType','employee')
          this.loginForm.reset();
          if(localStorage.getItem('userType')== 'admin')
          this.router.navigate(['home'])
          else
          alert("You are not allowed to acces this page Only admin are allowed")
        } else {
          alert("user not found!");       
        }
      }, err => {
        alert("Something went wrong!!")
      })        
  }
  // json-server --watch db.json  to run db.json server

}
