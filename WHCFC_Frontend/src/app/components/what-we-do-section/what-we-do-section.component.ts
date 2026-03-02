import { Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-what-we-do-section',
  standalone: true,
  imports: [],
  templateUrl: './what-we-do-section.component.html',
  styleUrl: './what-we-do-section.component.css'
})
export class WhatWeDoSectionComponent implements OnInit, OnDestroy {
  days_remaining_to_worldcup = 0;
  hours_remaining_to_worldcup = 0;
  minutes_remaining_to_worldcup = 0;

  private timerId: any;
  private targetDate = new Date('2026-06-11T00:00:00');

  constructor(
    private meta: Meta,
    private title: Title,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private updateCountdownOnce() {
    const now = new Date().getTime();
    const target = this.targetDate.getTime();
    const diff = target - now;

    if (diff <= 0) {
      this.days_remaining_to_worldcup = 0;
      this.hours_remaining_to_worldcup = 0;
      this.minutes_remaining_to_worldcup = 0;
      return;
    }

    this.days_remaining_to_worldcup = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours_remaining_to_worldcup = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes_remaining_to_worldcup = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  }

  private startBrowserTimer() {
    this.timerId = setInterval(() => {
      this.updateCountdownOnce();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnInit() { 
    this.title.setTitle('What We Do | White Haven Community Football Club');
    this.meta.updateTag({
      name: 'description',
      content:
        "Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop, Learn more about White Haven Community Football Club's mission, vision, goal and board members",
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, about us, mission, vision, goal',
    });

    this.meta.updateTag({
      name: 'author',
      content: 'White Haven Community Football Club - Building a Stronger Soccer Community',
    });

    this.updateCountdownOnce();

    if (isPlatformBrowser(this.platformId)) {
      this.startBrowserTimer();
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }
}
