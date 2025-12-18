import { Component, PLATFORM_ID, Inject, platformCore } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vol-heading',
  standalone: true,
  imports: [],
  templateUrl: './vol-heading.component.html',
  styleUrl: './vol-heading.component.css'
})
export class VolHeadingComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  scrollToBottom(): void {
    if (isPlatformBrowser((this.platformId))) {
      const scrollHeight = document.body.scrollHeight;
      const offset = 1200;

      window.scrollTo({ top: scrollHeight - offset, behavior: 'smooth' });
    }
  }

}
