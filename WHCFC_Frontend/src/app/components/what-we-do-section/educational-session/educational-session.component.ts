import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    private title: Title
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

  readonly pageContent = {
    eyebrow: 'EDUCATIONAL SESSIONS',
    heroTitle: 'Skills for Success Microlearning* Modules',
    heroDescription: 'Short, focused workshops on practical Skills for Success topics.',
    microlearningDefinition:
      '*Micro-learning modules are short, focused learning units designed to teach one specific concept, skill, or behavior at a time. They are easy to complete, can stand alone or be combined into a learning pathway, and often use practical examples, scenarios, and shared experiences.',
    registrationNotice:
      'Registration for future public workshops will be posted here once dates are confirmed.',

    aboutProgramTitle: 'About WHCC Corp.',
    aboutProgramDescription:
      'WHCC Corp. is a Not-For-Profit committed to building and developing communities by enabling residents to connect, network, grow and learn through the transformative power of football and education.',

    programDescriptionTitle: 'Program Description',
    programDescriptionText:
      'Equipping participants with critical competencies to manage their personal and professional lives successfully, e.g., to build relationships, work well with others, and enhance employability, as most employers look for these key skillsets.',

    workshopTopicsTitle: 'Workshop Topics',
    workshopTopicsDescription:
      'Modules may include the following Skills for Success topics:',

    currentDeliveryTitle: 'Current Delivery',
    currentDeliveryDescription:
      'A session on Project Management Basics as a Skill for Success is already planned for May 9, 2026 for a Malvern community.',
    currentDeliveryFollowUp:
      'Evaluation feedback from that session will be posted here afterward.',

    communityInputTitle: 'Community Input',
    communityInputPrefix: 'Questions or topic suggestions:',
    communityInputEmail: 'fcwhitehaven@gmail.com',

    targetAudienceTitle: 'Target Audience',
    registrationProcessTitle: 'Registration',

    footerLine1:
      'WHCC Corp. is a Not-For-Profit fostering community through sport and education.',
    footerLine2:
      'Support from Sponsorships, Funding & Subsidies helps achieve our goals.',

    featureImage: {
      src: 'assets/Edu3.jpg',
      alt: 'Community members participating in a learning session'
    }
  };

  readonly communityInputMailto = `mailto:${this.pageContent.communityInputEmail}`;

  readonly workshopTopics: string[] = [
    'Project Management Basics as a Skill for Success',
    'Budgeting & Finances',
    'Collaboration in the New World of Work',
    'Cultural Competence',
    'Resilience & Growth Mindset',
    'Change and Continuous Learning',
    'Communication in the New World of Work',
    'Social Intelligence',
    'Systems Thinking',
    'Civility & Citizenship'
  ];

  readonly targetAudienceItems: string[] = [
    'Youth and adults interested in personal growth and Skills for Success learning',
    'Community members seeking practical workplace and everyday-life competencies',
    'Residents who want to participate, connect, grow, and learn through community programming',
    'Individuals exploring topics that support confidence, employability, and community engagement'
  ];

  readonly registrationSteps: string[] = [
    'Registration for future public workshops will be posted here once dates are confirmed.',
    'Participants will then be able to register for a specific workshop.',
    'The registration form can also include an option for participants to indicate topics of interest.'
  ];
}