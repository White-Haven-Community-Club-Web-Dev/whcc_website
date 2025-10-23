import { Component, Input } from '@angular/core';
import { Events } from '../../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'event-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.css',
})
export class EventDetailComponent {
  @Input() eventList!: Events[];
  ngOnInit(): void {
    this.eventList = this.eventList.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
}
