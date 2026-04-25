import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { EducationalSessionPageComponent } from './pages/educational-session/educational-session.component';
import { HouseLeaguePageComponent } from './pages/house-league/house-league.component';
import { F3ProgramPageComponent } from './pages/f3-program/f3-program.component';
import { WcccEventsPageComponent } from './pages/wccc-events-page/wccc-events-page.component';

export const routes: Routes = [
  // Current public pages
  { path: '', component: HomeComponent },
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'what-we-do', component: WhatWeDoComponent },
  { path: 'educational-session', component: EducationalSessionPageComponent },
  { path: 'house-league', component: HouseLeaguePageComponent },
  { path: 'f3-program', component: F3ProgramPageComponent },
  { path: 'scarborough-connects', component: WcccEventsPageComponent },
  // Legacy URLs → current pages
  { path: 'about-us', redirectTo: 'who-we-are', pathMatch: 'full' },
  { path: 'community', redirectTo: 'what-we-do', pathMatch: 'full' },
  { path: 'contact-us', redirectTo: '', pathMatch: 'full' },
  // Anything else → Home
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
