import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact/contact-form/contact-form.component';
// import { ContactMapComponent } from '../../components/contact/contact-map/contact-map.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, /*ContactMapComponent*/],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent { }
