import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { SbBlokData, StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'testimonial-section',
  imports: [StoryblokComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
   <div class="flex items-center justify-center gap-4 md:gap-6">
          <button type="button" (click)="previousVideo()"
            aria-label="Previous testimonial"
            class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex items-center justify-center text-gray-700">
            ◀
          </button>
          <div class="w-full max-w-[420px] rounded-xl overflow-hidden shadow-2xl bg-black">
          @for (item of blok().testimony; track $index) {
            <sb-component  [class.hidden]="currentIndex()!==$index" [class.block]="currentIndex()==$index" [sbBlok]="item" />
          }
          </div>
          <button type="button" (click)="nextVideo()" aria-label="Next testimonial"
            class="h-10 w-10 md:h-12 md:w-12 rounded-full border border-gray-200 bg-white shadow-sm hover:shadow-md transition flex items-center justify-center text-gray-700">
            ▶
          </button>
        </div>
  `,
})
export class TestimonialSectionComponent {
  blok = input.required<ITestimonialContent>();
  currentIndex = signal(0);
  previousVideo() {
    this.currentIndex.update((value) => {
      if (value <= 0) {
        return 0;
      }
      return value - 1;
    })
  }
  nextVideo() {
    this.currentIndex.update((value) => {
      value += 1;
      console.log(value);
      
      if (value >= this.blok().testimony.length) {
        return this.blok().testimony.length - 1;
      }
      return value;
    })
  }
}
interface ITestimonialContent {
  testimony: SbBlokData[];
}