import { Component, OnInit, OnDestroy, ChangeDetectorRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import countdown from 'countdown';

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
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  private updateCountdownOnce() {
    const timespan = countdown(
      null,
      this.targetDate,
      countdown.DAYS | countdown.HOURS | countdown.MINUTES
    ) as countdown.Timespan;

    this.days_remaining_to_worldcup = timespan.days ?? 0;
    this.hours_remaining_to_worldcup = timespan.hours ?? 0;
    this.minutes_remaining_to_worldcup = timespan.minutes ?? 0;
  }

  private startBrowserTimer() {
    this.timerId = setInterval(() => {
      this.updateCountdownOnce();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnInit() { 
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
