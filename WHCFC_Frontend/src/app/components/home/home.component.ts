import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface FeaturedEventDetail {
  icon: string;
  label: string;
  value: string;
  iconBg: string;
}

interface EventCard {
  title: string;
  image: string;
  date: string;
  location: string;
  meta: string;
  tag: string;
}

interface HeroContent {
  eyebrow: string;
  titleHighlight: string;
  titleRest: string;
  subtitle: string;
  primaryCta: { label: string; link: string };
  secondaryCta: { label: string; link: string; playIcon: string };
  image: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: string;
  iconBg: string;
  linkText: string;
  link: string;
  linkColorClass: string;
}

interface FeaturedEventHeader {
  badgeEmoji: string;
  badgeLabel: string;
  title: string;
  descriptionLines: string[];
}

interface FeaturedEventImageText {
  monthLabel: string;
  tagline: string;
  image: string;
}

interface FeaturedEventExpectItem {
  text: string;
}

interface SectionHeader {
  title: string;
  subtitleLines: string[];
  cta?: { label: string; link: string };
  dateIcon?: string;
  locationIcon?: string;
  metaIcon?: string;
}

interface ImpactStat {
  value: string;
  label: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  hero: HeroContent = {
    eyebrow: "Join Scarborough's First",
    titleHighlight: "FREE",
    titleRest: "Football Community",
    subtitle: "Where diversity meets passion on the pitch",
    primaryCta: {
      label: "Register Now",
      link: "/connect-with-us",
    },
    secondaryCta: {
      label: "Watch Story",
      link: "/who-we-are",
      playIcon: "▶",
    },
    image: "Hero Section Image.jpg"
  };

  quickActions: QuickAction[] = [
    {
      title: "Join a Match",
      description: "Find and join pickup games in your area",
      icon: "Join a Match Card Icon.svg",
      iconBg: "#EEF3FF",
      linkText: "Learn More",
      link: "/what-we-do",
      linkColorClass: "text-blue-500",
    },
    {
      title: "Volunteer",
      description: "Help us grow the community",
      icon: "Volunteer Card Icon.svg",
      iconBg: "#EAF8F0",
      linkText: "Sign Up",
      link: "/connect-with-us",
      linkColorClass: "text-green-500",
    },
    {
      title: "View Events",
      description: "Check out upcoming tournaments and activities",
      icon: "View Events Card Icon.svg",
      iconBg: "#FFF3E5",
      linkText: "See Calendar",
      link: "/what-we-do",
      linkColorClass: "text-red-500",
    },
  ];

  featuredEventHeader: FeaturedEventHeader = {
    badgeEmoji: "⚽",
    badgeLabel: "Featured Event",
    title: "FIFA World Cup 2026 Watch Party",
    descriptionLines: [
      "Join us for the biggest soccer celebration in North America!",
      "Watch the games, enjoy food, and celebrate with our",
      "community.",
    ],
  };

  featuredEventImageText: FeaturedEventImageText = {
    monthLabel: "June 2026",
    tagline: "The World Comes to North America",
    image: "world-cup-watch-party.png"
  };

  featuredEventDetails: FeaturedEventDetail[] = [
    {
      icon: 'Multiple Dates Card Icon.svg',
      label: 'Dates',
      value: 'Sat June 27, 2026',
      iconBg: '#FFECEC',
    },
    {
      icon: 'Location Card Icon.svg',
      label: 'Location',
      value: 'Scarborough Civic Center',
      iconBg: '#EAF8F0',
    },
    {
      icon: 'Community Event Card Icon.svg',
      label: 'Community Event',
      value: 'All ages welcome',
      iconBg: '#EEF3FF',
    },
    {
      icon: 'Live Screening Card Icon.svg',
      label: 'Live Screening',
      value: 'Big screen + sound',
      iconBg: '#F4ECFF',
    },
  ];

  whatToExpect = {
    title: "What to Expect:",
  };

  featuredEventExpectations: FeaturedEventExpectItem[] = [
    { text: "Live match screenings on big screens" },
    { text: "Food trucks & refreshments" },
    { text: "Kids activities & mini soccer clinics" },
    { text: "Cultural performances & entertainment" },
    { text: "100% FREE for the community" },
  ];

  featuredEventCta = {
    label: "Learn More",
    link: "/what-we-do",
  };

  featuredEventsSection: SectionHeader = {
    title: "Featured Events",
    subtitleLines: [
      "Join us in our upcoming events and be part of our",
      "growing football community",
    ],
    cta: {
      label: "Learn More",
      link: "/what-we-do",
    },
    dateIcon: "Multiple Dates Card Icon.svg",
    locationIcon: "Location Card Icon.svg",
    metaIcon: "Members Card Icon.svg"
  };

  featuredEvents: EventCard[] = [
    {
      title: 'World Cup Watch Party',
      image: 'World Cup Watch Party Card Image.png',
      date: 'June & July 2026',
      location: 'White Haven Park',
      meta: 'Neighbours',
      tag: 'Community',
    },
    {
      title: 'House League (Ages 6–18)',
      image: 'House League Card Image.png',
      date: 'May – July 2026',
      location: 'Scarborough',
      meta: 'Neighbours',
      tag: 'Youth',
    },
    {
      title: 'Training Clinics',
      image: 'Training Clinics Card Image.png',
      date: 'May 2026 Weekends',
      location: 'Scarborough',
      meta: 'Neighbours',
      tag: 'Clinics',
    },
    {
      title: 'F³ Indoor Football Program',
      image: 'F3 Indoor Football Card Image.png',
      date: 'Weekly (Mon/Wed/Fri)',
      location: "Scarborough Indoor Sports Complex",
      meta: 'Neighbours',
      tag: 'Adults',
    },
  ];

  communityImpactSection: SectionHeader = {
    title: "Community Impact",
    subtitleLines: [
      "Together, we're making a difference in Scarborough's",
      "sports community",
    ],
  };

  impactStats: ImpactStat[] = [
    {
      value: "500+",
      label: "Members",
      icon: "Members Card Icon.svg",
      iconBg: "#EEF3FF",
    },
    {
      value: "50+",
      label: "Events",
      icon: "Events Card Icon.svg",
      iconBg: "#EAF8F0",
    },
    {
      value: "10+",
      label: "Partners",
      icon: "Partners Card Icon.svg",
      iconBg: "#F4ECFF",
    },
    {
      value: "5,000+",
      label: "Hours",
      icon: "Hours Card Icon.svg",
      iconBg: "#FEE2E2",
    },
  ];
}
