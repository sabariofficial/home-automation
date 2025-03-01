import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignComponent } from "./sign/sign.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
import { AutomateComponent } from './automate/automate.component';
import { ReportComponent } from './report/report.component';
import { HomeComponent } from "./home/home.component";
import { ControlsComponent } from "./controls/controls.component";
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'automate', component: AutomateComponent },
      { path: 'report', component: ReportComponent },
      {path:'controls',component:ControlsComponent}
    ]
  },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
