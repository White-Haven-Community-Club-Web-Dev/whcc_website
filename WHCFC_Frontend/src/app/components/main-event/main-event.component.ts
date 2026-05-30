import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { StoryblokComponent } from "@storyblok/angular";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-event',
  imports: [StoryblokComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
    <section id="featured-event" class="bg-red-50">
      <div class="px-4 md:px-6 lg:px-8 xl:px-0 max-w-6xl mx-auto mt-16 md:mt-20 py-16">
        <!-- Header -->
        <div class="flex flex-col items-center text-center mb-10">
          <div
            class="inline-flex items-center px-4 py-2 rounded-full bg-[#e02020] text-[11px] font-semibold tracking-[0.10em] uppercase text-white">
            {{ blok()?.capTitle }}
          </div>
          <h2 class="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
           {{blok()?.title}}
          </h2>
          <p class="mt-3 max-w-3xl text-sm md:text-base text-gray-600 leading-relaxed">
            {{blok()?.description}}
        </p>
      </div>
      <!-- Content -->
      <div class="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-6 lg:gap-8 items-stretch">
        <!-- Left: Event image card -->
          <article class="relative rounded-[26px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.25)]
                   min-h-[360px] md:min-h-[400px] lg:min-h-[430px]">
          <img [src]="blok()?.image?.filename" [alt]="blok()?.image?.alt"
            class="absolute inset-0 h-full w-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent"></div>
          <div class="absolute left-6 bottom-5 text-white">
            <!-- <p class="text-sm md:text-base font-semibold">
              {{ featuredEventImageText.monthLabel }}
            </p>
            <p class="text-xs md:text-sm text-white/90">
              {{ featuredEventImageText.tagline }}
            </p> -->
          </div>
        </article>
        <!-- Right: Details -->
        <div class="flex flex-col gap-4 lg:gap-5">
          <!-- Top: Four Info Cards -->
           <sb-component class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4" [sbBlok]="blok()?.featureCards" />
          <!-- Features Board -->
            <div class="rounded-3xl bg-gradient-to-r from-[#F87171] via-[#EF4444] to-[#C81E1E]
                     px-5 py-5 md:px-6 md:py-6 text-white shadow-[0_20px_40px_rgba(220,38,38,0.45)]">
            <p class="text-xs md:text-sm font-semibold tracking-[0.16em] uppercase text-white/80 mb-3">
              {{ blok()?.featureBoardTitle }}
            </p>
            <ul class="space-y-2 text-xs md:text-sm leading-relaxed text-white/90">
              @for (item of blok()?.featuresBoard?.split(","); track item) {
                <li class="flex items-start gap-2">
                  <span class="mt-[2px] text-[#BBF7D0]">✓</span>
                  <span>{{ item }}</span>
                </li>
              }
            </ul>
          </div>
          <!-- Button -->
          <div class="pt-1">
            @if(blok()?.buttonLink?.linktype==="story"){
               <a [routerLink]="blok()?.buttonLink?.cached_url" routerLinkActive="active" type="button" class="inline-flex items-center justify-center w-full px-7 py-3 rounded-lg bg-[#E53935] hover:bg-[#d32f2f]
                       text-white text-s  md:text-md font-semibold shadow-lg shadow-[#e53935]/40 transition">
              {{ blok()?.buttonText }}
            </a>
            }@else { <a [href]="blok()?.buttonLink?.cached_url" routerLinkActive="active" type="button" class="inline-flex items-center justify-center w-full px-7 py-3 rounded-lg bg-[#E53935] hover:bg-[#d32f2f]
                       text-white text-s  md:text-md font-semibold shadow-lg shadow-[#e53935]/40 transition">
              {{ blok()?.buttonText }}
            </a>}
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class MainEventComponent implements OnInit {
  blok = input<IMainEventComponentContent>();
  ngOnInit(): void {
  }

}

interface IMainEventComponentContent {
  image: {
    alt: string
    filename: string
  },
  title: string;
  capTitle: string;
  description: string;
  featureCards: any[];
  featureBoardTitle: string;
  featuresBoard: string;
  buttonLink: {
    linktype: "story" | "url";
    cached_url: string
  }
  buttonText: string
}