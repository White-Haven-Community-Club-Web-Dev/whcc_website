import { Component, input } from '@angular/core';

@Component({
  selector: 'stat-card',
  imports: [],
  template: `
     <article class="flex flex-col items-center rounded-2xl bg-white px-6 py-7 text-center shadow-sm">
             <div class="relative h-12 w-12 rounded-xl flex items-center justify-center overflow-hidden">
    <!-- The "Background Color" Blur Effect -->
    <img [src]="data()?.icon?.filename" alt=""
      class="absolute h-12 w-12 scale-[2] blur-md opacity-70 select-none pointer-events-none" aria-hidden="true"
      loading="lazy" decoding="async" />

    <!-- The Actual Crisp Foreground Image -->
    <img [src]="data()?.icon?.filename" [alt]="data()?.icon?.alt" class="relative h-5 w-5 z-10"
      loading="lazy" decoding="async" width="20" height="20" />
  </div>
            <p class="mt-3 text-2xl font-semibold text-slate-900">
              {{ data()?.text }}
            </p>
            <p class="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
              {{ data()?.subtext }}
            </p>
          </article>
  `,
})
export class StatCardComponent {
  data = input<IStatusComponent>();
}


interface IStatusComponent{
  text:string;
  subtext:string;
  icon:{filename:string;alt:string}
}