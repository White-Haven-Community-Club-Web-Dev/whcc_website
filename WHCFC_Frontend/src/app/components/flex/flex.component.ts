import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SbBlokData, StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'flex',
  imports: [StoryblokComponent],
  template: `
      <div [class]="'flex w-full h-full my-1 justify-center '+' '+blok().direction+' '+blok().gap" >
       @for (item of blok().items; track $index) {
         <sb-component [sbBlok]="item" />
       }
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexComponent {
  blok = input.required<IFlexContent>();
}
interface IFlexContent {
  direction: string;
  gap: string;
  items: SbBlokData[]
}