import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { EventsCardComponent } from "../events-card/events-card.component";
import { StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'featured-events',
  imports: [StoryblokComponent],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
  <div class="mx-auto max-w-6xl px-4 lg:px-0">
 <div class="text-center py-10">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">
            {{ blok().title }}
          </h2>
          <p class="mt-2 text-sm text-slate-600 text-wrap lg:w-1/4 mx-auto">
           {{blok().description}}
          </p>
             <div class="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <sb-component [sbBlok]="blok().events" />
        </div>
        </div>
        </div>
  `,
})
export class FeaturedEventsComponent implements OnInit {
  blok = input.required<IFeaturedEventsContent>();
  ngOnInit(): void {
  }

}


interface IFeaturedEventsContent {
  title: string;
  description: string;
  events: any[]
}