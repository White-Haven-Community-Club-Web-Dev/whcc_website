import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../../components/contact/contact-form/contact-form.component';
import { ContactMapComponent } from '../../components/contact/contact-map/contact-map.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactFormComponent, ContactMapComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Contact Us | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Get in touch with White Haven Community Football Club. Contact us for any questions about our programs, volunteering opportunities, or general inquiries.' },
      { name: 'keywords', content: 'contact, WHCFC, White Haven Football Club, contact form, location, email, phone, address' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
