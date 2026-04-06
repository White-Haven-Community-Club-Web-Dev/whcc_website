import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-educational-session',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './educational-session.component.html',
  styleUrl: './educational-session.component.css'
})
export class EducationalSessionComponent {
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Educational Sessions | White Haven Community Football Club');
    this.meta.updateTag({
      name: 'description',
      content:
        "Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop, Learn more about White Haven Community Football Club's mission, vision, goal and board members",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'football, soccer, futsal, community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer, Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, about us, mission, vision, goal',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'White Haven Community Football Club - Building a Stronger Soccer Community',
    });
  }

  readonly registrationUrl = 'https://forms.cloud.microsoft/r/eeFuTaV9He';

  readonly pageContent = {
    eyebrow: 'EDUCATIONAL SESSIONS',
    heroTitle: 'Skills for Success',
    heroDescription: 'Micro-learning workshops on Skills for Success topics.',
    registerButtonText: 'Express Interest',

    aboutProgramTitle: 'About Program',
    aboutProgramDescription:
      'WHCC Corp. is a Not-For-Profit committed to building communities where residents can connect, grow, learn, and develop through the transformative power of sport and education.',

    programDescriptionTitle: 'Program Description',
    programDescriptionText:
      'Equipping participants with critical competencies to manage their personal and professional lives successfully and compete for employment.',

    workshopTopicsTitle: 'Workshop Topics',
    workshopTopicsDescription:
      'Sessions may include the following Skills for Success topics:',

    communityInputTitle: 'Community Input',
    communityInputPrefix: 'Questions or topic suggestions:',
    communityInputEmail: 'fcwhitehaven@gmail.com',

    targetAudienceTitle: 'Target Audience',
    registrationProcessTitle: 'Registration Process',

    footerLine1:
      'WHCC Corp. is a Not-For-Profit fostering community through sport and education.',
    footerLine2:
      'Support from Sponsorships, Funding & Subsidies helps achieve our goals.'
  };

  readonly communityInputMailto = `mailto:${this.pageContent.communityInputEmail}`;

  readonly workshopTopics: string[] = [
    'Project Management as Skills for Success',
    'Collaboration in the New World of Work',
    'Cultural Competence',
    'Resilience & Growth Mindset',
    'Change and Continuous Learning',
    'Communication in the New World of Work',
    'Social Intelligence',
    'Systems Thinking',
    'Civility & Citizenship'
  ];

  readonly infoCards = [
    {
      title: 'Upcoming Session',
      lines: ['May 9, 2026', '1:00 PM to 2:00 PM']
    },
    {
      title: 'Format',
      lines: [
        'Partner session with 42 Voices.',
        'Closed session for 42 Voices members only.'
      ]
    },
    {
      title: 'Location',
      lines: [
        'Malvern',
        '42 Voices will coordinate logistics.'
      ]
    }
  ];

  readonly sessionCards = [
    {
      label: 'Confirmed Session',
      title: 'Project Management Basics as a Skill for Success',
      presenter: 'With Joe Fernandes',
      points: [
        'Scheduled for May 9, 2026 from 1:00 PM to 2:00 PM',
        'Presented in partnership with 42 Voices',
        'This session is for 42 Voices members only'
      ]
    },
    {
      label: 'Upcoming Session',
      title: 'Budgeting & Finances',
      presenter: 'With Gurpurv Kukreja',
      points: [
        'Tax Filing: Navigating the Tax Landscape',
        'Bookkeeping essentials',
        'Debt management fundamentals'
      ]
    }
  ];

  readonly targetAudienceItems: string[] = [
    'Youth and adults interested in personal growth and Skills for Success learning',
    'Community members seeking practical workplace and everyday-life competencies',
    'Residents who want to participate, connect, grow, and learn through community programming',
    'Individuals exploring topics that support confidence, employability, and community engagement'
  ];

  readonly registrationSteps: string[] = [
    'Click Express Interest.',
    'Complete the Microsoft Form with your contact details.',
    'Select the topics or sessions you are interested in.',
    'Submit the form to receive updates on dates, location, and upcoming announcements.'
  ];
}