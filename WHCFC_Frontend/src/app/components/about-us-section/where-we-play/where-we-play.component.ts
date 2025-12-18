import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-where-we-play',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './where-we-play.component.html',
  styleUrl: './where-we-play.component.css'
})
export class WhereWePlayComponent {
  title = 'Where We Play';
  content = 'We play at White Haven Park, located at 63 Invergordon Ave, Scarborough, ON.';
  mapUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5760.711122694048!2d-79.25227112346384!3d43.786234543815866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d10374000001%3A0x62f484e422dd9fcc!2sWhite%20Haven%20Park!5e0!3m2!1sen!2sca!4v1727566759985!5m2!1sen!2sca');
  }
}
