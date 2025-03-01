import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDetails: any;
  home: any;
  

  constructor(
    public cookieService:CookieService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // this.cookieService
    // console.log(this.userInfo);
    
    // console.log(this.cookieService.get('userInfo'));
    this.userDetails = JSON.parse(this.cookieService.get('userInfo'));
    console.log(this.userDetails);
    
    
  }

  onSubmitDashboard(){
    this.router.navigate(['home/dashboard'])
  }

  onSubmitAutomate(){
    this.router.navigate(['home/automate'])
  }

  onSubmitReport(){
    this.router.navigate(['home/report'])
  }
  onSubmitcontrol(){
    this.router.navigate(['home/controls'])
    
  }
  logout(){
    this.cookieService.deleteAll('/');
    this.cookieService.delete('tvVisible');
    this.cookieService.delete('fridgeVisible');
    this.cookieService.delete('/home','tvVisible');
    this.cookieService.delete('/home','fridgeVisible');
    this.cookieService.delete('/','userInfo');
    this.cookieService.delete('/home','userInfo');
    
    this.router.navigate(['login'])
  }

}
