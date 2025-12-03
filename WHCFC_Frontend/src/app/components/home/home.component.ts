import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  homePageData?: {
    heroSlide1Title: string,
    heroSlide1Subtitle: string,
    heroSlide1Link: string,
    heroSlide2Title: string,
    heroSlide2Subtitle: string,
    heroSlide2Link: string,
    benefitsTitle: string,
    visionTitle: string,
    visionContent: string,
    visionImage: string,
    missionImage: string,
    missionTitle: string,
    missionContent: string,
    messageTitle: string,
    messageContent: string,
    messageVideo: string
  };

  cmsService: any;

  benefits = [
    {
      icon: '⚽',
      title: 'Free Football Experiences',
      description: 'Attend our Wednesday and Sunday scrimmages at no cost and no obligation. Participate in team play and summer tournaments with no cost.'
    },
    {
      icon: '🏆',
      title: 'Team Play and Tournaments',
      description: 'Enjoy competitive football opportunities without the financial burden. Join a team with minimal uniform costs and benefit from our efforts to keep expenses low.'
    },
    {
      icon: '🌟',
      title: 'Community and Networking',
      description: 'Interact with like-minded individuals, develop long-term relationships, and be part of a supportive community. Build connections that enhance both personal and professional growth.'
    },
    {
      icon: '📚',
      title: 'Educational Workshops',
      description: 'Join free workshops focused on developing life skills, career growth, and personal development. Enhance your skills and knowledge to support your future endeavors.'
    }
  ];

  activeSlide = 0; // Track the current slide
  slideInterval: ReturnType<typeof setInterval> | undefined; // Hold the interval reference

  constructor(private cdr: ChangeDetectorRef, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    this.titleService.setTitle('Home | White Haven Community Football Club');

    this.metaService.addTags([
      { name: 'description', content: 'Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop.' },
      { name: 'keywords', content: 'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club' },
      { name: 'author', content: 'White Haven Community Football Club - Building a Stronger Soccer Community' }
    ]);

    if (typeof window !== 'undefined') {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 10000);
    }
  }


  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  goToSlide(slideIndex: number) {
    this.activeSlide = slideIndex;
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }

  // Automatically move to the next slide
  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % 2; // Alternates between 0 and 1 for two slides
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }

  // Move to the previous slide
  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + 2) % 2; // Cycles back to the last slide if at the beginning
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }
}
