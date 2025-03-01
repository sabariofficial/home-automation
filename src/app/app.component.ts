import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private cookie_name='';
private all_cookies:any='';
title = 'home-automation';
constructor(private cookieService:CookieService){

}

// setCookie(){
//   this.cookieService.set('name','Tutorialswebsite');
// }

// deleteCookie(){
//   this.cookieService.delete('name');
// }

// deleteAll(){
//   this.cookieService.deleteAll();
// }

ngOnInit(): void {
// this.cookie_name=this.cookieService.get('name');
// this.all_cookies=this.cookieService.getAll();  // get all cookies object
    }
}


  

