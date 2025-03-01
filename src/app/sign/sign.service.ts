import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class SignService {

   url = 'http://localhost:3000/signup_data';
   urlTvReport = 'http://localhost:3000/reportTvData';
   urlFridgeReport = 'http://localhost:3000/reportFridgeData';


  constructor(
    public http:HttpClient
  ) { }

  setUserData(signupdata: any){
    console.log(signupdata);
    

    // const headers = new HttpHeaders({
    //   'content-type': 'appication/json'
    // });

    // const option = { headers: headers}
    
    // const body = signupdata;

    return this.http.post(this.url, signupdata);
    
  }

  setReportsData( data: any){
    return this.http.post(this.urlTvReport, data);
  }
  setfridgeReportsData( data: any){
    return this.http.post(this.urlFridgeReport, data);
  }

}
