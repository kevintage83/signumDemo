import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JasonPressBioComponent } from './jason-press-bio/jason-press-bio.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { ClientHomePageComponent } from './client-home-page/client-home-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AndrewBishopBioComponent } from './andrew-bishop-bio/andrew-bishop-bio.component';
import { AngelaDaltonBioComponent } from './angela-dalton-bio/angela-dalton-bio.component';
import { AnnaRosenbergBioComponent } from './anna-rosenberg-bio/anna-rosenberg-bio.component';
import { CharlesMyersBioComponent } from './charles-myers-bio/charles-myers-bio.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'jasonPress', component: JasonPressBioComponent },
    { path: 'andrewBishop', component: AndrewBishopBioComponent },
    { path: 'angelaDalton', component: AngelaDaltonBioComponent },
    { path: 'annaRosenberg', component: AnnaRosenbergBioComponent },
    { path: 'charlesMyers', component: CharlesMyersBioComponent },
    { path: 'resetPassword', component: ForgotPasswordComponent },
    { path: 'register', component: RegistrationPageComponent},
    { path: 'clientHome', component: ClientHomePageComponent},
    { path: 'accountCreated', component: CreateAccountComponent },
    { path: 'termsOfService', component: TermsOfServiceComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes,{
        anchorScrolling: 'enabled'
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, LoginComponent, JasonPressBioComponent, ForgotPasswordComponent]
