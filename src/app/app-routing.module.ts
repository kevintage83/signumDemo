import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { JasonPressBioComponent } from './jason-press-bio/jason-press-bio.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'jbio', component: JasonPressBioComponent },
    { path: 'resetPassword', component: ForgotPasswordComponent },
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
