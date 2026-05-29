import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'list-card',
  imports: [StoryblokComponent],
  template: `
    <div class="bg-gray rounded-2xl p-6 md:p-8">
      <h2 class="text-3xl font-normal leading-tight text-primary font-roboto mb-4">
        {{ blok().title }}
      </h2>
    <sb-component [sbBlok]="blok().list" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListCardComponent {
  blok = input.required<IListCardContent>();
}
interface IListCardContent {
  title: string;
  list: SbBlokData;
}