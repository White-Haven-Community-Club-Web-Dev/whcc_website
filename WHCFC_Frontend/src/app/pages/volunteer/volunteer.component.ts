import { Component, OnInit } from '@angular/core';
import { VolHeadingComponent } from '../../components/volunteer/vol-heading/vol-heading.component';
import { VolOpportunitiesComponent } from '../../components/volunteer/vol-opportunities/vol-opportunities.component';
import { VolTestimonialsComponent } from '../../components/volunteer/vol-testimonials/vol-testimonials.component';
import { VolGetInvolvedComponent } from '../../components/volunteer/vol-get-involved/vol-get-involved.component';
import { VolApplyComponent } from '../../components/volunteer/vol-apply/vol-apply.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [VolHeadingComponent, VolOpportunitiesComponent, VolTestimonialsComponent, VolGetInvolvedComponent, VolApplyComponent],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Volunteer | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Volunteer opportunities at White Haven Community Football Club. Join us in coaching, event management, marketing, logistics, and more. Make a difference in your community through football.' },
      { name: 'keywords', content: 'volunteer, community service, soccer coaching, event management, sports volunteering, community engagement, football club volunteer' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
