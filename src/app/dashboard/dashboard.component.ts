import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  userDetails: any;

  constructor(
    public cookieService:CookieService
  ) { }

  ngOnInit(): void {
    // this.cookieService
    // console.log(this.userInfo);
    
    // console.log(this.cookieService.get('userInfo'));
    this.userDetails = JSON.parse(this.cookieService.get('userInfo'));
    console.log(this.userDetails);
    
    
  }
  

}
