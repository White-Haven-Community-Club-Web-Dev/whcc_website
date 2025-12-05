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
}

interface FeaturedEventExpectItem {
  text: string;
}

interface SectionHeader {
  title: string;
  subtitleLines: string[];
  cta?: { label: string; link: string };
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
      link: "/what-we-do",
    },
    secondaryCta: {
      label: "Watch Story",
      link: "/who-we-are",
      playIcon: "▶",
    },
  };

  quickActions: QuickAction[] = [
    {
      title: "Join a Match",
      description: "Find and join pickup games in your area",
      icon: "Join a Match Card Icon.svg",
      iconBg: "#EEF3FF",
      linkText: "Learn",
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
      link: "/who-we-do",
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
  };

  featuredEventDetails: FeaturedEventDetail[] = [
    {
      icon: 'Multiple Dates Card Icon.svg',
      label: 'Multiple Dates',
      value: 'Throughout June & July 2026',
      iconBg: '#FFECEC',
    },
    {
      icon: 'Location Card Icon.svg',
      label: 'Location',
      value: 'White Haven Park',
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
  };

  featuredEvents: EventCard[] = [
    {
      title: 'Summer League Championship',
      image: 'Summer League Championship Card Image.png',
      date: 'Dec 15, 2024',
      location: 'Scarborough Sports Complex',
      meta: '24 Teams',
      tag: 'Tournament',
    },
    {
      title: 'Youth Training Camp',
      image: 'Youth Training Camp Card Image.png',
      date: 'Dec 20–22, 2024',
      location: 'West Hill Community Centre',
      meta: '50 Youth',
      tag: 'Training',
    },
    {
      title: 'New Year Football Festival',
      image: 'New Year Football Festival Card Image.png',
      date: 'Jan 1, 2025',
      location: 'Centennial Park',
      meta: '200+ People',
      tag: 'Festival',
    },
    {
      title: 'Weekly Pickup Games',
      image: 'Weekly Pickup Games Card Image.png',
      date: 'Every Saturday',
      location: "L'Amoreaux Park",
      meta: 'Open to All',
      tag: 'Regular',
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
