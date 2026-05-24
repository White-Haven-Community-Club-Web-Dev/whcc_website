import { ChangeDetectionStrategy, Component, forwardRef, input, OnInit } from '@angular/core';
import { StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'section-component',
  imports: [StoryblokComponent],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
    <section class="py-16 md:py-20 mx-auto max-w-6xl" >
      <sb-component class="mx-auto" [sbBlok]="blok()?.items" />
    </section>
  `,
})
export class SectionComponent implements OnInit {
  blok = input<ISectionContent>()

  ngOnInit(): void {
  }
}

interface ISectionContent {
  items: any[];
}