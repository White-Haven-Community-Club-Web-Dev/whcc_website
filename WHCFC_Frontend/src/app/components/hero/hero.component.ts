import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-section',
  imports: [],
  template: `
    <section class="relative min-h-[calc(100vh)] overflow-hidden flex items-center md:min-h-[calc(100vh)]">
      <img [src]=" data()?.backgroundImage?.filename" [alt]="data()?.backgroundImage?.alt"
        class="absolute inset-0 h-full w-full object-cover"
        loading="eager" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/55 via-black/75 to-black/55"></div>
      <div class="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center text-white">
        <p class="mb-3 text-xs font-semibold tracking-[0.25em] uppercase">
          {{ data()?.capTitle }}
        </p>
        <h1 class="mb-3 text-3xl font-semibold sm:text-4xl md:text-5xl">
          <span class="block">
            <span class="text-green-500">{{ data()?.heroTitleHighlighted }}</span>
            {{ data()?.heroTitle }}
          </span>
        </h1>
        <p class="mb-6 text-sm sm:text-base md:text-lg text-white/90">
          {{ data()?.subtitle }}
        </p>
       @if(data()?.buttonText){
         <div class="flex flex-wrap items-center justify-center gap-4">
          <a routerLinkActive="active" routerLink="/who-we-are"
            class="rounded-lg bg-[#e02020] px-6 py-2.5 cursor-pointer text-xs font-semibold uppercase tracking-wide text-white shadow-lg hover:bg-[#c01a1a] transition">
            {{ data()?.buttonText }}
          </a>
        </div>
       }
      </div>
    </section>
  `,
})
export class HeroComponent implements OnInit {
  data = input<IHeroComponentData>();
  constructor() {
  }
  ngOnInit(): void {

  }
}


interface IHeroComponentData {
  capTitle: string,
  subtitle: string,
  heroTitle: string,
  heroTitleHighlighted: string,
  buttonText: string,
  capTitleStyle: string,
  backgroundColor: string,
  backgroundImage: {
    alt: null,
    name: string,
    focus: null,
    title: null,
    source: null,
    filename: string,
    meta_data: {}
  },
  _editable: '<!--#storyblok#{"name": "heroSection", "space": "292536268674880", "uid": "12f93bb9-be66-40d9-a48d-4ec4ff9dc900", "id": "177235803682118"}-->'

}