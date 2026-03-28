import { isPlatformBrowser, NgForOf } from '@angular/common';
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-wccc-events-page',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './wccc-events-page.component.html',
  styleUrl: './wccc-events-page.component.css'
})
export class WcccEventsPageComponent implements OnInit, OnDestroy, AfterViewInit {
  eventConfig: any = {
    name: "World Cup Community Connections Festival",
    shortName: "WCCC FESTIVAL 2026",
    tagline: "Bringing Scarborough Together Through Football",

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
  timeLeft: any = {};

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

  features = [
    {
     
      title: 'Global Food Village',
      description: 'Sample delicious cuisines from around the world featuring local vendors and international flavors.',
      image: 'https://images.unsplash.com/photo-1761992554804-9a107cd4b5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY29tbXVuaXR5JTIwZmVzdGl2YWwlMjBmb29kJTIwdmVuZG9yc3xlbnwxfHx8fDE3NzI1ODgxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
     
      title: 'Live Entertainment',
      description: 'Enjoy performances from talented local artists, DJs, and cultural dance groups throughout the day.',
      image: 'https://images.unsplash.com/photo-1720096322069-8d84365ef60a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwbXVzaWMlMjBwZXJmb3JtYW5jZSUyMG91dGRvb3IlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzI1ODgxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {

      title: 'Football Skills Clinic',
      description: 'Interactive football training sessions and skills challenges for youth and adults led by experienced coaches.',
      image: 'https://images.unsplash.com/photo-1717584146940-118a65525da8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbCUyMHNraWxscyUyMHRyYWluaW5nJTIwa2lkc3xlbnwxfHx8fDE3NzI1ODgxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
   
      title: 'Community Corner',
      description: 'Connect with local organizations, community groups, and resources serving Scarborough residents.',
      image: 'https://images.unsplash.com/photo-1758599669186-9eaf14f6f3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJzJTIwaGVscGluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MjU4ODEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
  
      title: 'Kids Zone',
      description: 'Face painting, bouncy castles, and family-friendly games to keep the little ones entertained.',
      image: 'https://images.unsplash.com/photo-1761057292517-74dfb48ede46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aWN1bHR1cmFsJTIwZmFtaWx5JTIwZmVzdGl2YWwlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzI1ODgxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
     
      title: 'Vendor Market',
      description: 'Browse unique products from local artisans, crafters, and small businesses.',
      image: 'https://images.unsplash.com/photo-1761992554804-9a107cd4b5bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwY29tbXVuaXR5JTIwZmVzdGl2YWwlMjBmb29kJTIwdmVuZG9yc3xlbnwxfHx8fDE3NzI1ODgxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];


  private timer: any;
  private eventDate;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.eventDate = new Date(`${this.eventConfig.date}T12:00:00`);

  }


  ngOnInit(): void {

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
}
