import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavItem = {
  label: string;
  link: string;
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

  brand: BrandConfig = {
    initial: 'W',
    name: 'WHCFC',
    homeLink: '/',
  };

  navItems: NavItem[] = [
    { label: 'WHO WE ARE', link: '/who-we-are' },
    { label: 'WHAT WE DO', link: '/what-we-do' },
    { label: 'CONNECT WITH US', link: '/connect-with-us' },
  ];

  cta: CtaConfig = {
    label: 'World Cup 2026',
    link: '/what-we-do',
  };

  icons: IconAssets = {
    hamburger: 'assets/Hamburger Icon.svg',
    close: 'assets/Close Icon.svg',
  };

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
