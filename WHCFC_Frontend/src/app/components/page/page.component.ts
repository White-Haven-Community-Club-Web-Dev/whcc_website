import { ChangeDetectionStrategy, Component, computed, input, OnInit } from '@angular/core';
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
export class PageComponent implements OnInit {
  readonly blok = input.required<PageBlok>();
  readonly bloks = computed(() => this.blok().body ?? []);
  ngOnInit(): void {
    
  }
}
export interface PageBlok {
  body?: SbBlokData[];
}

