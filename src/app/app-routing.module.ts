import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { JasonPressBioComponent } from './jason-press-bio/jason-press-bio.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'jbio', component: JasonPressBioComponent },
    { path: 'resetPassword', component: ForgotPasswordComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, JasonPressBioComponent]
