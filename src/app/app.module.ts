import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './sign/sign.component';
import { HttpClientModule } from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { AutomateComponent } from './automate/automate.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from './home/home.component';
import { ControlsComponent } from './controls/controls.component';
// import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignComponent,
    DashboardComponent,
    AutomateComponent,
    ReportComponent,
    HomeComponent,
    ControlsComponent,
    // CookieService
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
