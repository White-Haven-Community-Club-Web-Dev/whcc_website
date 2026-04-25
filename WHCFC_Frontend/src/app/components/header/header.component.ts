import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavChild = {
  label: string;
  link: string;
};

type NavItem = {
  label: string;
  link?: string;
  children?: NavChild[];
};

type BrandConfig = {
  initial: string;
  name: string;
  homeLink: string;
};

type CtaConfig = {
  label: string;
  link: string;
};

type IconAssets = {
  hamburger: string;
  close: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  isMobileMenuOpen = false;
  openDropdown: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  brand: BrandConfig = {
    initial: 'W',
    name: 'WHCFC',
    homeLink: '/',
  };

  navItems: NavItem[] = [
    { label: 'WHO WE ARE', link: '/who-we-are' },
    {
      label: 'WHAT WE DO',
      children: [
        { label: 'Scarborough Connects', link: '/scarborough-connects' },
        { label: 'Educational Session', link: '/educational-session' },
        { label: 'House League & Football Clinics', link: '/house-league' },
        { label: 'F³ Indoor Football Program', link: '/f3-program' },
      ],
    },
  ];

  cta: CtaConfig = {
    label: 'Scarborough Connects 2026',
    link: '/what-we-do',
  };

  icons: IconAssets = {
    hamburger: 'assets/Hamburger Icon.svg',
    close: 'assets/Close Icon.svg',
  };

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleDropdown(label: string): void {
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeDropdown(): void {
    this.openDropdown = null;
  }

  openMobileAccordion: string | null = null;

  toggleMobileAccordion(label: string): void {
    this.openMobileAccordion = this.openMobileAccordion === label ? null : label;
  }

  onDesktopNavClick(): void {
    this.openDropdown = null;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }

  onMobileNavClick(): void {
    this.isMobileMenuOpen = false;
    this.openMobileAccordion = null;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }
}
