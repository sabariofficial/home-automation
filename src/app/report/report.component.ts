import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  url = 'http://localhost:3000/reportTvData';
  tvReportData: any;

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getReportData();
  }

  getReportData(){
    this.http.get(this.url).subscribe( data => {
      this.tvReportData = data;
      console.log(this.tvReportData);
    });
  }

}
