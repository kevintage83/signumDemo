import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CharlesMyersBioComponent } from './charles-myers-bio/charles-myers-bio.component';
import { AndrewBishopBioComponent } from './andrew-bishop-bio/andrew-bishop-bio.component';
import { AngelaDaltonBioComponent } from './angela-dalton-bio/angela-dalton-bio.component';
import { JasonPressBioComponent } from './jason-press-bio/jason-press-bio.component';
import { AnnaRosenbergBioComponent } from './anna-rosenberg-bio/anna-rosenberg-bio.component';

const appRoutes: Routes = [
  { path: 'charlesMyersBio', component: CharlesMyersBioComponent },
  { path: 'angelaDaltonBio', component: AngelaDaltonBioComponent },
  { path: 'annaRosenbergBio', component: AnnaRosenbergBioComponent },
  { path: 'andrewBishopBio', component: AndrewBishopBioComponent },
  { path: 'jasonPressBio', component: JasonPressBioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CharlesMyersBioComponent,
    AndrewBishopBioComponent,
    AngelaDaltonBioComponent,
    JasonPressBioComponent,
    AnnaRosenbergBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

