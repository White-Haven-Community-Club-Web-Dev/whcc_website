import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
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
      value: 'White Haven Park, 63 Invergordon Ave, Scarborough, ON'
    }
  ];

  copyright =
    '© 2025 White Haven Community Football Club. All rights reserved.';

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
