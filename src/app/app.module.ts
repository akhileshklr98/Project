import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './dairy/home/home.component';
import { SocityComponent } from './socity/socity/socity.component';
import { DairynavbarComponent } from './dairy/dairynavbar/dairynavbar.component';
import { AddsocityComponent } from './dairy/addsocity/addsocity.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SocityComponent,
    DairynavbarComponent,
    AddsocityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
