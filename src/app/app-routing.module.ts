import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/dairy/home/home.component';
import { SocityComponent } from '../app/socity/socity/socity.component';
import { AddsocityComponent } from './dairy/addsocity/addsocity.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dairy', component: HomeComponent},
  {path: 'socity', component: SocityComponent},
  {path: 'dairy/add', component: AddsocityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
