import { isPlatformBrowser, NgForOf } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wccc-events-page',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './wccc-events-page.component.html',
  styleUrl: './wccc-events-page.component.css'
})
export class WcccEventsPageComponent implements OnInit, OnDestroy, AfterViewInit {
  eventConfig: any = {
    name: "World Cup Community\nConnections Festival",
    shortName: "WCCC FESTIVAL 2026",
    tagline: "Bringing Scarborough Together Through Football",

    ctaButtonTitle: "Register Your Interest",
    ctaButtonLink: "",

    // Date and Time
    // Format: YYYY-MM-DD for the date

    date: "2026-06-20",
    displayDate: "Saturday, June 20, 2026",
    startTime: "12:00 PM",
    endTime: "6:00 PM",
    displayTime: "12:00 PM - 6:00 PM",

    // Location
    venue: "Scarborough Civic Center",
    address: "Scarborough Civic Center", // Add full address when available

    // Contact Information
    email: "info@whcfc.ca",
    phone: "", // Add phone number when available

    // Website
    websiteUrl: "https://whcfc.ca", // Update with actual website URL
  };

  notice = {
    title: "Important Notice — Subject to Approval", city: "City of Toronto", authority: "venue management authority", description: `All event details — including activities, vendor participation, viewing arrangements, and programming —
                are subject to review and formal approval by the`};
  timeLeft: any = {
    title: "Event Starts In",
  };
  // About to the Event Section
  highlights = [
    {
      title: 'Community Unity',
      description: 'Building and developing communities by leveraging the transformative power of football through programs that provide football and educational experiences'
    },
    {
      title: 'Celebration of Culture & Diversity',
      description: 'As Toronto embraces the World In A City theme, Scarborough continues to reflect best practices in diversity, equity and inclusion (DEI)'
    },
    {
      title: 'World Cup Spirit',
      description: 'Youth, the leaders of tomorrow, enhance their skills and learn collaboration, fair play, respect and DEI through house league, development clinics and tournaments'
    },
    {
      title: 'Educational Sessions',
      description: 'Micro learning modules (April-December 2026) helping adults and youth develop skills for personal and professional success in careers, work and home life'
    }
  ];
  // What to Expect Section
  features = {
    title: " What to Expect",
    subtitle: "Six exciting areas of activity designed to create memorable experiences for all attendees",
    cards: [
      {

        title: 'Community Corner',
        icon: `  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-users-round w-6 h-6 text-white"
                                data-fg-dwwj16="1.19:1.4979:/src/app/components/WhatToExpect.tsx:71:21:4558:47:e:feature.icon"
                                data-fgid-dwwj16=":r3d:">
                                <path d="M18 21a8 8 0 0 0-16 0"></path>
                                <circle cx="10" cy="8" r="5"></circle>
                                <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
                            </svg>`,
        description: 'Connect with local organizations, community groups, and resources serving Scarborough residents.',
        image: 'https://images.unsplash.com/photo-1758599669186-9eaf14f6f3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjU4ODEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
      },
      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-white lucide-tv-icon lucide-tv"><path d="m17 2-5 5-5-5"/><rect width="20" height="15" x="2" y="7" rx="2"/></svg>`,
        title: 'Live Match Entertainment',
        description: `Join your local football family at the clubhouse for every match. Experience the stadium energy with a live broadcast, a sea of jerseys, and the unbeatable atmosphere of cheering alongside fellow fans.`,
        image: "https://images.unsplash.com/photo-1727334291228-188f30b43f1f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-store-icon lucide-store"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"/><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"/><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"/></svg>`,
        title: `The Marketplace`,
        description: `Explore what our local community is creating.Discover the unique projects, crafts, and stories of fellow fans in a non-commercial space dedicated to celebrating our community’s creativity.`,
        image: `https://images.unsplash.com/photo-1614603869015-1820cc8194fb?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
      },

      {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-person-standing-icon lucide-person-standing"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>`,
        title: 'Family-friendly Experience',
        description: 'Experience the big game in a setting that’s as welcoming as it is exciting. With activities and atmosphere tailored for all ages, it’s the perfect spot for your family to join ours in cheering for every goal.',
        image: `https://images.unsplash.com/photo-1758612897478-52cab69b7e42?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
      },


    ]
  }

  aboutEvent = {
    title: "About the Event", description: `   The World Cup Community Connections Festival is a celebration of football, culture, and community
                spirit.
                Join us for an unforgettable day of entertainment, connection, and celebration at the heart of
                Scarborough.
                Whether you're a die-hard football fan or simply looking for a fun family outing, WCCC offers something
                for everyone.`}
  // Get Involved Section content
  opportunities = {
    title: "Get Involved",
    subtitle: `Help make WCCC Festival a success! Multiple ways to participate and contribute to this community
                celebration`,
    cards: [
      {
        icon: `<div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style="background-color: rgba(224, 1, 13, 0.082);"
                    data-fg-bujk11="1.20:1.3848:/src/app/components/GetInvolved.tsx:54:15:2020:301:e:div:e"
                    data-fgid-bujk11=":r4e:"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" class="lucide lucide-store w-8 h-8" style="color: rgb(224, 1, 13);"
                        data-fg-bujk12="1.20:1.3848:/src/app/components/GetInvolved.tsx:58:17:2223:77:e:opportunity.icon"
                        data-fgid-bujk12=":r4f:">
                        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                        <path d="M2 7h20"></path>
                        <path
                            d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7">
                        </path>
                    </svg></div>`,
        title: 'Become a Vendor',
        description: 'Showcase your products or food offerings to thousands of community members. Limited vendor spots available.',
        color: 'primary',
        action: 'Vendor Application'
      },
      {
        icon: `<div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background-color: rgba(27, 170, 118, 0.082);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide text-customGreen lucide-award w-8 h-8"  ><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg></div>`,
        title: 'Sponsor the Event',
        description: 'Align your brand with community values and gain visibility among diverse Scarborough residents.',
        color: 'customGreen',
        action: 'Sponsorship Info'
      },
      {
        icon: `<div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background-color: rgba(224, 1, 13, 0.082);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-heart text-primary w-8 h-8"  data-fg-bujk12="1.20:1.3848:/src/app/components/GetInvolved.tsx:58:17:2223:77:e:opportunity.icon" data-fgid-bujk12=":r4t:"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path><path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 15 6 6"></path><path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"></path></svg></div>`,
        title: 'Volunteer',
        description: 'Be part of the team that brings this event to life. Volunteer positions available across all festival areas.',
        color: 'customGreen',
        action: 'Volunteer Form'
      },
      {
        icon: `<div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style="background-color: rgba(27, 170, 118, 0.082);" data-fg-bujk11="1.20:1.3848:/src/app/components/GetInvolved.tsx:54:15:2020:301:e:div:e" data-fgid-bujk11=":r53:"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-handshake w-8 h-8" style="color: rgb(27, 170, 118);" data-fg-bujk12="1.20:1.3848:/src/app/components/GetInvolved.tsx:58:17:2223:77:e:opportunity.icon" data-fgid-bujk12=":r54:"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg></div>`,
        title: 'Partner Organization',
        description: 'Community groups and organizations can partner with us to increase outreach and impact.',
        color: 'customGreen',
        action: 'Partnership Inquiry'
      }
    ]
  };

  contact = { desc: "Have questions about getting involved? We'd love to hear from you!", connect: "Contact our team at&nbsp;<b>info&#64;whcfc.ca</b>" }

  faqs = {
    title: "Frequently Asked Questions", description: "Everything you need to know about the WCCC Festival",
    cards: [
      {
        question: 'Is the event free?',
        answer: 'Yes, this is a completely free event open to all Scarborough residents. No tickets or registration required.'
      },
      {
        question: 'Where is the event taking place?',
        answer: 'The event will be held at the Scarborough Civic Centre — indoor viewing in the Council Chamber and community gathering in the surrounding area. Final venue details will be confirmed shortly.'
      },
      {
        question: 'When is the event?',
        answer: 'The main event is planned for June 20, 2026. A teaser event is also being planned for June 12, 2026.'
      },
      {
        question: 'What can I expect at the event?',
        answer: 'Live soccer match viewing, community networking, local vendor showcases, family-friendly activities, and a celebration of Scarborough\'s diversity.'
      },
      {
        question: 'Can vendors sell products at the event?',
        answer: 'Vendors will participate in a showcase format — they can display and promote their products and services, but on-site sales will not take place during the event.'
      },
      {
        question: 'Is the event family-friendly?',
        answer: 'Absolutely. The event is designed to be welcoming and inclusive for all ages, including children, youth, and seniors.'
      },
      {
        question: 'Who is organizing this event?',
        answer: 'The event is organized by White Haven Community Club (WHCC), a volunteer-led not-for-profit organization based in Scarborough.'
      },
      {
        question: 'How can I get involved?',
        answer: 'You can participate as an attendee, volunteer, vendor, or community partner. Contact us at [info@whcfc.ca] or visit [https://whcfc.ca/] for more information.'
      }
    ]
  };



  private timer: any;
  private eventDate;
  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object, private sanitizer: DomSanitizer) {
    this.eventDate = new Date(`${this.eventConfig.date}T12:00:00`);

  }


  ngOnInit(): void {
    this.title.setTitle('WCCC Event | White Haven Community Football Club');
    this.meta.updateTag({
      name: 'description',
      content:
        "The World Cup Community Connections(WCCC Event) Festival celebrates football, culture, and community spirit in the heart of Scarborough. Join us for an unforgettable day of entertainment and connection—perfect for die-hard fans and families alike.",
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

  ngAfterViewInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => {
        this.timeLeft = this.calculateTimeLeft();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.timer)
  }


  private calculateTimeLeft = () => {
    const now = new Date();
    const difference = this.eventDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  getSafeSvg(svgString: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
  activeIndex: number | null = 0;
  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

}
