import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import countdown from 'countdown';

@Component({
  selector: 'app-what-we-do-section',
  standalone: true,
  imports: [],
  templateUrl: './what-we-do-section.component.html',
  styleUrl: './what-we-do-section.component.css'
})

export class WhatWeDoSectionComponent { }
// export class WhatWeDoSectionComponent implements OnInit, OnDestroy {
//   days_remaining_to_worldcup: number = 0;
//   hours_remaining_to_worldcup: number = 0;
//   minutes_remaining_to_worldcup: number = 0;
//   timerId: any;

//   private targetDate = new Date('2026-06-11T00:00:00');

//   constructor(private cdr: ChangeDetectorRef) { }
  
//   private updateCountdown() {
//     const timespan = countdown(
//       null,
//       this.targetDate,
//       countdown.DAYS | countdown.HOURS | countdown.MINUTES
//     ) as countdown.Timespan;

//     this.days_remaining_to_worldcup = timespan.days ?? 0;
//     this.hours_remaining_to_worldcup = timespan.hours ?? 0;
//     this.minutes_remaining_to_worldcup = timespan.minutes ?? 0;
//   }

//   ngOnInit() {
//     //Update immediately
//     this.updateCountdown();

//     //Update every second
//     this.timerId = setInterval(() => {
//       this.updateCountdown();
//       this.cdr.detectChanges();
//     }, 1000);
//   }

//   ngOnDestroy() {
//     if (this.timerId) {
//       clearInterval(this.timerId);
//     }
//   }
// }
