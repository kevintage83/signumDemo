import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { ClientWelcomeComponent } from './client-welcome/client-welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ForgotPasswordComponent,
    LoginComponent,
    RegistrationPageComponent,
    ClientHomePageComponent,
    ClientWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

