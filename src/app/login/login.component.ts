import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  url = 'http://localhost:3000/signup_data';
  userDetails : any;

  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router,
    private cookieService:CookieService
   
      
    
    ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.invalid) {
      alert('Please enter Email & Password!!');
      return;
    }
    this.http.get(this.url).subscribe( data => {
      console.log(data);
      console.log(typeof(data));
      this.userDetails = data;
      let filterVal = this.userDetails.filter((val: { email: string; }) => {
        return val.email === this.loginForm.value.email; 
      })
      // debugger;
      console.log(filterVal);
    console.log(filterVal);

      if( filterVal[0].password === this.loginForm.value.password ){
        var userCookie = this.loginForm.value;
        this.cookieService.set('userInfo', JSON.stringify(filterVal));
        var tvObj={
          Product : '',
          Display : ''
        }
        this.cookieService.set( 'tvVisible', JSON.stringify(tvObj));
         
        var fridgeObj={
          Product : '',
          Display : ''
        }
        this.cookieService.set( 'fridgeVisible', JSON.stringify(fridgeObj));
         
    
        alert('login success'); 
        this.router.navigate(['home']);
       }else{
         alert('Username & Password Mismatch');
       }

     
      // this.userDetails.forEach((element: any) => {
      //   var test = element.filter( element.email === this.loginForm.value.mail)
      //   console.log(test);
      //   // var filterVal =  element.filter( ele => element.gmail === this.loginForm.value.mail )
      //   console.log(element.email);
      //   // console.log(filterVal);
      // });
    });
    // alert('SUCCESS!! :-)');
  }

}
