import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/event/calendar/calendar.component';
import { EventDetailComponent } from '../../components/event/event-detail/event-detail.component';
import { CMSService } from '../../services/cms.service';
import { Events } from '../../../types';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, CalendarComponent, EventDetailComponent],
  templateUrl: './event.component.html',
})
export class EventComponent implements OnInit {
  eventList: Events[] = [];         // all events for calendar dots
  selectedEvents: Events[] = [];    // events for clicked date
  selectedDay: number | null = null;
  isLoading = true;
  isDayLoading = false;

  constructor(private cms: CMSService) {}

  ngOnInit(): void {
    this.cms.getEvents().subscribe({
      next: (events) => {
        this.eventList = events;
        this.isLoading = false;
      },
      error: () => {
        this.eventList = [];
        this.isLoading = false;
      }
    });
  }

  onDaySelected(day: number): void {
    this.selectedDay = day;
    this.isDayLoading = true;

    // Build full date string for current month e.g. "2026-04-27"
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const dayStr = String(day).padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${month}-${dayStr}`;

    this.cms.getEventsByDate(dateStr).subscribe({
      next: (events) => {
        this.selectedEvents = events;
        this.isDayLoading = false;
      },
      error: () => {
        this.selectedEvents = [];
        this.isDayLoading = false;
      }
    });
  }
}