import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/dairy/home/home.component';
import { SocityComponent } from '../app/socity/socity/socity.component';
import { AddsocityComponent } from './dairy/addsocity/addsocity.component';
import { SalesComponent } from './socity/sales/sales.component';
import { SponsorComponent } from './socity/sponsor/sponsor.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dairy', component: HomeComponent},
  {path: 'socity', component: SocityComponent},
  {path: 'dairy/add', component: AddsocityComponent},
  {path: 'socity/sale', component: SalesComponent},
  {path: 'socity/sponsor', component: SponsorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
