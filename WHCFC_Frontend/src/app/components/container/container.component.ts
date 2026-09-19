import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StoryblokComponent } from '@storyblok/angular';

@Component({
  selector: 'container',
  imports: [StoryblokComponent],
  template: ` <div  [class]="'mx-2s lg:mx-auto '+blok().classes" >
      <sb-component class="mx-auto" [sbBlok]="blok().items" />
</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContainerComponent {
  blok = input.required<IContainer>()
}
interface IContainer {
  items: any[];
  classes: string;
  // optional anchor target used by in-page-nav-link
  sectionId?: string;
}