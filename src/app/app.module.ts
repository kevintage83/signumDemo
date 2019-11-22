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
import { CreateAccountComponent } from './create-account/create-account.component';
import { AndrewBishopBioComponent } from './andrew-bishop-bio/andrew-bishop-bio.component';
import { AngelaDaltonBioComponent } from './angela-dalton-bio/angela-dalton-bio.component';
import { AnnaRosenbergBioComponent } from './anna-rosenberg-bio/anna-rosenberg-bio.component';
import { CharlesMyersBioComponent } from './charles-myers-bio/charles-myers-bio.component';
import { JasonPressBioComponent } from './jason-press-bio/jason-press-bio.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HomeComponent,
    ForgotPasswordComponent,
    AndrewBishopBioComponent,
    AngelaDaltonBioComponent,
    AnnaRosenbergBioComponent,
    CharlesMyersBioComponent,
    JasonPressBioComponent,
    LoginComponent,
    RegistrationPageComponent,
    ClientHomePageComponent,
    ClientWelcomeComponent,
    CreateAccountComponent,
    TermsOfServiceComponent,
    PageNotFoundComponent
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

