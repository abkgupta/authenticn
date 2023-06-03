import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
   apiUrls = environment.apiUrl
  // check if form is dirty 
  isDirty = true;
  public registerForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required], 
      password: ['', Validators.required],
      mobile: ['', Validators.required]
    })
  }
  Registernow() {
    let isUserExist: boolean = false;
    this.http.get<any>(this.apiUrls+`/RegisterUsers?fullname=${this.registerForm.value.fullname}`).subscribe(fullNameRes => {
      this.http.get<any>(`http://localhost:3000/RegisterUsers?email=${this.registerForm.value.email}`).subscribe(emailRes => {
        this.http.get<any>(`http://localhost:3000/RegisterUsers?mobile=${this.registerForm.value.mobile}`).subscribe(mobileRes => {
          isUserExist = fullNameRes.length > 0 || emailRes.length > 0 || mobileRes.length > 0 ? true : false
         // Urlsearchparams
          console.log("window location ", window.location)
          // const myKeysValues = window.location.search
          // console.log("Keys and values ", myKeysValues)
          if (isUserExist) {
            alert("User Already exist!"); 
            return;
          }
          this.http.post<any>("http://localhost:3000/RegisterUsers", this.registerForm.value)
            .subscribe(res => {
              alert('registered success')
              // console.log(this.registerForm.value)
              // localStorage.setItem("token","sdkknkvnkfvkvokdvndlkvmdk")
              // this.registerForm.value.user
              this.registerForm.reset();            
              this.router.navigate(['register']);
            }, err => {
              alert("Something went wrong")
            })
        });
      });
    })

  }


}
