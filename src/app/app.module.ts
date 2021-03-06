import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dairy/home/home.component';
import { SocityComponent } from './socity/socity/socity.component';
import { DairynavbarComponent } from './dairy/dairynavbar/dairynavbar.component';
import { AddsocityComponent } from './dairy/addsocity/addsocity.component';
import { SocitynavbarComponent } from './socity/socitynavbar/socitynavbar.component';
import { SalesComponent } from './socity/sales/sales.component';
import { SponsorComponent } from './socity/sponsor/sponsor.component';
import { ShowComponent } from './dairy/show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SocityComponent,
    DairynavbarComponent,
    AddsocityComponent,
    SocitynavbarComponent,
    SalesComponent,
    SponsorComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
