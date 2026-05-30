import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'grid-section',
  imports: [],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
  <section  class="py-16 md:py-20">
        <div class="mx-auto max-w-6xl px-4 lg:px-0">
          <div class="grid  grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <!-- Text -->
            <div [class.order-2]="blok().direction==='left'">
              <p class="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500">
                {{ blok().capTitle }}
              </p>
              <h2 class="mt-3 text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
                {{ blok().title }}
              </h2>
              <div class="mt-4 h-1 w-24 bg-[#e02020] rounded-full"></div>
              @for (paragraph of blok().description.split("|"); track paragraph) {
                <p
                  class="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                  {{ paragraph }}
                </p>
              }
            </div>
            <!-- Image -->
            <article
              class="relative hidden lg:block rounded-[26px] overflow-hidden shadow-[0_20px_40px_rgba(15,23,42,0.18)] min-h-[360px] md:min-h-[400px]">
              <img [src]="blok().image.filename" [alt]="blok().image.alt"
                class="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
            </article>
          </div>
        </div>
      </section>
  `,
})
export class GridSectionComponent implements OnInit{
  blok = input.required<IGridSectionContent>()

  ngOnInit(): void {    
  }
}

interface IGridSectionContent {
  title: string;
  capTitle: string;
  image: { filename: string, alt: string }
  description: string;
  direction: "left" | "right"
}