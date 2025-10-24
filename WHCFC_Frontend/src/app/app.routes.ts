import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { NgModule } from '@angular/core';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CommunityComponent } from './pages/community/community.component';
import { PlayComponent } from './components/play/play.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { IndoorSoccerComponent } from './pages/indoor-soccer/indoor-soccer.component';
import { SponsorsComponent } from './pages/sponsors/sponsors.component';
import { EducationalSessionsComponent } from './pages/educational-sessions/educational-sessions.component';
import { YouthProgramComponent } from './pages/youth-program/youth-program.component';
import { CanadadayComponent } from './pages/canadaday/canadaday.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'play', component: PlayComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'community', component: CommunityComponent },
  { path: 'indoor-soccer', component: IndoorSoccerComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'educational-sessions', component: EducationalSessionsComponent },
  { path: 'youth-program', component: YouthProgramComponent },
  { path: 'canadaday', component: CanadadayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
