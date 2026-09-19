import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'in-page-nav',
  imports: [StoryblokComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <nav class="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div class="mx-auto max-w-6xl px-4 flex flex-wrap justify-center gap-6 py-3">
        @for (link of blok().links; track $index) {
          <sb-component [sbBlok]="link" />
        }
      </div>
    </nav>
  `,
})
export class InPageNavComponent {
  readonly blok = input.required<IInPageNavContent>();
}

interface IInPageNavContent {
  links: SbBlokData[];
}
