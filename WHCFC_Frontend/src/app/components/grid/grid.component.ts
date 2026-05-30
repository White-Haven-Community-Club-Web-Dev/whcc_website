import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'grid',
  imports: [StoryblokComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'mx-2 md:mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 '+ blok().itemsPerRow" >
      @for (item of blok().items; track $index) {
        <sb-component [sbBlok]="item" />
      }
    </div>
  `,
})
export class GridComponent {
  blok = input.required<IGridContent>();
}
interface IGridContent {
  items: SbBlokData[];
  itemsPerRow: string;
}