import { ChangeDetectionStrategy, Component, forwardRef, input, OnInit } from '@angular/core';
import { StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'section-component',
  imports: [StoryblokComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <section [class]="'pt-16 md:pt-20 pb-8 mx-2 lg:mx-auto  '+blok().background" >
      <sb-component class="mx-auto" [sbBlok]="blok().items" />
    </section>
  `,
})
export class SectionComponent implements OnInit {
  blok = input.required<ISectionContent>()

  ngOnInit(): void {
  }
}

interface ISectionContent {
  items: any[];
  background: string;
}