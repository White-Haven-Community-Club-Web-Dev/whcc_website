import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { NgModule } from '@angular/core';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'volunteer', component: VolunteerComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'contact-us', component: ContactComponent },
    { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule { }