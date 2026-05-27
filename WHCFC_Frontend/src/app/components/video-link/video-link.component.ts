import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'video-link',
  imports: [],
  template: `
   <video [ariaLabel]="blok().altText" class="w-full  object-cover" controls [src]="blok().link">
              Your browser does not support the video tag.
            </video>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoLinkComponent {
  readonly blok = input.required<IVideoLikContent>();
}
interface IVideoLikContent {
  link: string;
  altText: string;
}