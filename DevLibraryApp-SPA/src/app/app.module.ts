import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
   declarations: [
      AppComponent,
      PagesComponent,
      NavComponent,
      HomeComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
