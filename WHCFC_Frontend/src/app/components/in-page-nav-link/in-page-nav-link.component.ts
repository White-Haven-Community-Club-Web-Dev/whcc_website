import { ChangeDetectionStrategy, Component, Inject, PLATFORM_ID, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'in-page-nav-link',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <button type="button" (click)="scrollToSection()"
      class="whitespace-nowrap text-sm font-medium text-slate-600 hover:text-red-600 uppercase tracking-wide">
      {{ blok().label }}
    </button>
  `,
})
export class InPageNavLinkComponent {
  readonly blok = input.required<IInPageNavLinkContent>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  scrollToSection(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const target = document.getElementById(this.blok().targetId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

interface IInPageNavLinkContent {
  label: string;
  targetId: string;
}
