import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-vol-opportunities',
  standalone: true,
  imports: [],
  templateUrl: './vol-opportunities.component.html',
  styleUrl: './vol-opportunities.component.css'
})
export class VolOpportunitiesComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  scrollToBottom(): void {
    if (isPlatformBrowser((this.platformId))) {
      const scrollHeight = document.body.scrollHeight;
      const offset = 1200;

      window.scrollTo({ top: scrollHeight - offset, behavior: 'smooth' });
    }
  }

}
