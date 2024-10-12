import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { parse } from 'date-fns';
import { TZDate } from '@date-fns/tz';
import { Events } from '../../../../types';

@Component({
  selector: 'event-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  currentMonth: number;
  currentYear: number;
  daysInMonth: number;
  firstDayOfMonth: number;
  calendarDays: (number | null)[];
  todayDate: number;
  eventList: Events[];
  eventDateList: (number | null)[];

  constructor() {
    const today = new Date();
    this.todayDate = today.getDate();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    this.firstDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    this.calendarDays = [];
    this.eventDateList = [];

    // For testing purposes
    this.eventList = [
      {
        title: 'A match',
        date: '2024-10-16',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
      {
        title: 'B match',
        date: '2024-10-11',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
      {
        title: 'C match',
        date: '2024-10-19',
        time: '17:00:00',
        category: 'match',
        description: '',
        location: '',
        team1: '',
        team2: '',
      },
    ];
  }

  ngOnInit(): void {
    this.generateCalendar();
    this.generateEventList();
  }

  generateCalendar(): void {
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < this.firstDayOfMonth; i++) {
      this.calendarDays.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= this.daysInMonth; day++) {
      this.calendarDays.push(day);
    }
  }

  generateEventList(): void {
    for (let i = 0; i < this.eventList.length; i++) {
      const event = this.eventList[i];
      const eventDate = new TZDate(
        parse(event.date + event.time, 'yyyy-MM-ddHH:mm:ss', new Date()),
        'America/New_York'
      );
      const eventDay = eventDate.getDate();
      this.eventDateList.push(eventDay);
    }
  }
}
