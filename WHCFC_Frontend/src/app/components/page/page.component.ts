import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'page',
  imports: [StoryblokComponent],
  changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
  <div>
      <sb-component [sbBlok]="bloks()" />
    </div>
  `,
})
export class PageComponent {
  readonly blok = input.required<PageBlok>();
  readonly bloks = computed(() => this.blok().body ?? []);
}
export interface PageBlok {
  body?: SbBlokData[];
}

