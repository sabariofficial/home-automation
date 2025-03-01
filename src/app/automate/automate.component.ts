import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SignService } from "../sign/sign.service";

@Component({
  selector: 'app-automate',
  templateUrl: './automate.component.html',
  styleUrls: ['./automate.component.scss']
})
export class AutomateComponent implements OnInit {
  tv: boolean = false;
  tvon: boolean = false;
  tvoff: boolean = false;
  fridge: boolean = false;
  fopen: boolean = false;
  fclose: boolean = false;
  tvOnDate: any;
  tvOnTime: any;
  tvOffDate: any;
  tvOffTime: any;
  fridgeOnDate:any;
  fridgeOnTime:any;
  fridgeOffDate:any;
  fridgeOffTime:any;


  url = 'http://localhost:3000/signup_data';


  tvDetails = JSON.parse(this.cookieService.get('tvVisible'));
  fridgeDetails = JSON.parse(this.cookieService.get('fridgeVisible'));



  constructor(
    public cookieService: CookieService,
    public http: HttpClient,
    public signService: SignService
  ) { }

  ngOnInit(): void {
    if (this.tvDetails.Product == "TV") {
      this.tv = true;
      this.tvon = false;
      this.tvoff = this.tvDetails.Display;

    }

    if (this.fridgeDetails.Product == "Fridge") {
      this.fridge = true;
      this.fopen = false;
      this.fclose = this.fridgeDetails.Display;
    }
  }

  onSubmittvon() {
    this.tvon = true;
    this.tvoff = false;

    var date = new Date();
    date.getHours();
    date.getMinutes();
    date.getSeconds();

    this.tvOnDate = date.toDateString();
    this.tvOnTime = date.toTimeString();
    console.log('onDate', this.tvOnDate);
    console.log('ontime', this.tvOnTime);
    // console.log(time);
    this.SetReports();
  }

  onSubmittvoff() {
    this.tvoff = true;
    this.tvon = false;
    var date = new Date();
    date.getHours();
    date.getMinutes();
    date.getSeconds();
    this.tvOffDate = date.toDateString();
    this.tvOffTime = date.toTimeString();
    console.log('OffDate', this.tvOffDate);
    console.log('Offtime', this.tvOffTime);
    this.SetReports();
  }

  SetReports(){
    var tvDetails = {
      Product : "Television",
      Ondate : this.tvOnDate,
      Ontime : this.tvOnTime,
      Offdate : this.tvOffDate,
      Offtime : this.tvOffTime
    }
    console.log(tvDetails);
    this.signService.setReportsData(tvDetails).subscribe( data => {
      console.log(data);
      alert("TV Data Added Successfully!!");
    });
  }

  onSubmitfridgeon() {
    this.fopen = true;
    this.fclose = false;
    var date = new Date();
    date.getHours();
    date.getMinutes();
    date.getSeconds();

    this.fridgeOnDate = date.toDateString();
    this.fridgeOnTime = date.toTimeString();
    console.log('onDate', this.fridgeOnDate);
    console.log('ontime', this.fridgeOnTime);
    this.SetfridgeReports();
  
  }

  onSubmitfridgeoff() {
    this.fopen = false;
    this.fclose = true;
    var date = new Date();
    date.getHours();
    date.getMinutes();
    date.getSeconds();

    this.fridgeOffDate = date.toDateString();
    this.fridgeOffTime = date.toTimeString();
    console.log('onDate', this.fridgeOffDate);
    console.log('ontime', this.fridgeOffTime);
    this.SetfridgeReports();

  }
  SetfridgeReports(){
    var fridgeDetails = {
      Product : "Fridge",
      Ondate : this.fridgeOnDate,
      Ontime : this.fridgeOnTime,
      Offdate : this.fridgeOffDate,
      Offtime : this.fridgeOffTime
    }
    console.log(fridgeDetails);
    this.signService.setfridgeReportsData(fridgeDetails).subscribe( data => {
      console.log(data);
      alert("Fridge Data Added Successfully!!");
    });
  }
}
