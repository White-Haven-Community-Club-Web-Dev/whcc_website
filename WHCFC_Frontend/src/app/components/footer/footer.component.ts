import { Component, input } from '@angular/core';


type ContactItem = {
  icon: string;
  alt: string;
  value: string;
  href?: string;
};

type SocialItem = {
  icon: string;
  alt: string;
  href?: string;
};

interface IFooterContent {
  title: string;
  subtitle: string;
  contactTitle: string;
  email: string;
  phone: string;
  address: string;
  fbLink: string;
  instaLink: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly blok = input.required<IFooterContent>();
  brand = {
    emoji: '⚽',
    short: 'WHCFC',
    description: 'Building community through football in Scarborough since 2020.'
  };

  connectTitle = 'Connect With Us';

  contacts: ContactItem[] = [
    {
      icon: 'Email Icon.svg',
      alt: 'Email',
      value: 'fcwhitehaven@gmail.com',
      href: 'mailto:fcwhitehaven@gmail.com'
    },
    {
      icon: 'Phone Icon.svg',
      alt: 'Phone',
      value: '(416) 558-1330'
    },
    {
      icon: 'Location Icon.svg',
      alt: 'Location',
      value: 'Scarborough, ON'
    }
  ];

  copyright =
    '© 2026 White Haven Community Football Club. All rights reserved.';

  socials: SocialItem[] = [
    {
      icon: 'Facebook Icon.svg',
      alt: 'Facebook',
      href:
        'https://www.facebook.com/people/White-Haven-FC/61565831557507/?mibextid=LQQJ4d'
    },
    {
      icon: 'Instagram Icon.svg',
      alt: 'Instagram',
      href:
        'https://www.instagram.com/fcwhitehaven/?igsh=MTB0ejQ2Z2lxMnA0&utm_source=qr#'
    },
    {
      icon: 'Email Icon.svg',
      alt: 'Email',
      href: 'mailto:fcwhitehaven@gmail.com'
    }
  ];

  isExternalLink(href?: string): boolean {
    return !!href && /^https?:\/\//i.test(href);
  }
}
