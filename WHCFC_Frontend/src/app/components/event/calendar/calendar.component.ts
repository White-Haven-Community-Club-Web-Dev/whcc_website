import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core'; // ← add Output, EventEmitter
import { parse } from 'date-fns';
import { TZDate } from '@date-fns/tz';
import { Events } from '../../../../types';

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

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
  currentMonthString: string;
  currentYear: number;
  daysInMonth: number;
  firstDayOfMonth: number;
  calendarDays: (number | null)[];
  todayDate: number;
  eventDateList: (number | null)[];

  @Input() eventList!: Events[];
  @Output() daySelected = new EventEmitter<number>(); // ← ADD THIS

  constructor() {
    const today = new Date();
    this.todayDate = today.getDate();
    this.currentMonth = today.getMonth();
    this.currentMonthString = months[this.currentMonth];
    this.currentYear = today.getFullYear();
    this.daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    this.calendarDays = [];
    this.eventDateList = [];
  }

  ngOnInit(): void {
    this.generateCalendar();
    this.generateEventList();
  }

  generateCalendar(): void {
    for (let i = 0; i < this.firstDayOfMonth; i++) {
      this.calendarDays.push(null);
    }
    for (let day = 1; day <= this.daysInMonth; day++) {
      this.calendarDays.push(day);
    }
  }

  generateEventList(): void {
    for (let i = 0; i < this.eventList.length; i++) {
      const event = this.eventList[i];
      const eventDate = new TZDate(
        parse(
          event.date.split('T')[0] + event.time,
          'yyyy-MM-ddHH:mm:ss',
          new Date()
        ),
        'America/New_York'
      );
      const eventDay = eventDate.getDate();
      this.eventDateList.push(eventDay);
    }
  }

  // ← ADD THIS METHOD
  onDayClick(day: number): void {
    if (this.eventDateList.includes(day)) {
      this.daySelected.emit(day);
    }
  }
}