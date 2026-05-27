import { ChangeDetectionStrategy, Component, DestroyRef, inject, input, NgZone, OnDestroy, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';
import { interval, take, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import dayjs from 'dayjs'
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-wccc-events-page',
  imports: [StoryblokComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './wccc-events-page.component.html',
  styleUrl: './wccc-events-page.component.css'
})
export class WcccEventsPageComponent implements OnInit, OnDestroy {

  readonly blok = input.required<ISCContent>();
  private destroyRef = inject(DestroyRef)


  notice = {
    title: "Important Notice — Subject to Approval", city: "City of Toronto", authority: "venue management authority", description: `All event details — including activities, vendor participation, viewing arrangements, and programming —
                are subject to review and formal approval by the`};
  timeLeft: any = {
    title: "Event Starts In",
  };
  countdown = signal<any>({});
  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);

  constructor(
    private meta: Meta,
    private title: Title) { }
  ngOnDestroy(): void {

  }


  ngOnInit(): void {
    const now = dayjs();
    // this.eventDate = new Dayjs().set('date',)
    this.countdown.update(v => this.getTimeLeft(this.blok().date))

    this.title.setTitle(' Scarborough Connects | White Haven Community Football Club');
    this.meta.updateTag({
      name: 'description',
      content:
        "The Scarborough Connects Event celebrates football, culture, and community spirit in the heart of Scarborough. Join us for an unforgettable day of entertainment and connection—perfect for die-hard fans and families alike.",
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'football, soccer, futsal, community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer, Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, about us, mission, vision, goal',
    });
    this.meta.updateTag({
      name: 'author',
      content: 'White Haven Community Football Club - Building a Stronger Soccer Community',
    });
    if (isPlatformBrowser(this.platformId)) {
      this.ngZone.runOutsideAngular(() => {
        interval(1000).pipe(take(Math.max(0, dayjs(this.blok().date).diff(now, 'second'))), takeUntilDestroyed(this.destroyRef), tap(() => {
          this.countdown.set(this.getTimeLeft(this.blok().date));
        })).subscribe()
      })
    }
  }

  getTimeLeft(targetDateString: string) {
    const now = dayjs();
    const target = dayjs(targetDateString);

    // Get total difference in milliseconds
    let diff = target.diff(now);

    // Calculate time units
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    return { days, hours, minutes, seconds };
  }

}


interface ISCContent {
  title: string;
  shortName: string;
  tagline: string;
  date: string;
  displayDate: string;
  startTime: string;
  endTime: string;
  venue: string;
  aboutSection: SbBlokData;
}