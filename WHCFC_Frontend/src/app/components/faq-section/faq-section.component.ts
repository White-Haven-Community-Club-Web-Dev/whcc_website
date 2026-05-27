import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'faq-section',
  imports: [StoryblokComponent],
  template: `
    <div class="bg-white rounded-lg shadow-card mx-auto max-w-6xl p-8 ">
      <sb-component  [sbBlok]="blok().faq" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqSectionComponent {
  readonly blok = input.required<IFaqSectionContent>()
}

interface IFaqSectionContent {
  faq: SbBlokData[];
}