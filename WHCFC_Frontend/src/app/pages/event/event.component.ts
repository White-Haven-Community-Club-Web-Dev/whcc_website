import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/event/calendar/calendar.component';
import { EventDetailComponent } from '../../components/event/event-detail/event-detail.component';
import { Events } from '../../../types';
import { RestService } from '../../services/rest.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule, CalendarComponent, EventDetailComponent],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent {
  eventList: Events[] = [];

  constructor(private restService: RestService) {
    const apiUrl = environment.apiUrl + '/agenda/all-agendas';
    this.restService.get(apiUrl).subscribe((data) => {
      this.eventList = data as Events[];
    });
    console.log(this.eventList);
  }
}
