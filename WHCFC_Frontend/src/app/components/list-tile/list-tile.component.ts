import { Component, input } from '@angular/core';

@Component({
  selector: 'list-tile',
  imports: [],
  template: `
    <div
  class="flex items-start gap-3 bg-white rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-[0_16px_30px_rgba(15,23,42,0.10)]">
  <div class="relative h-9 w-9 rounded-2xl flex items-center justify-center overflow-hidden">
    <!-- The "Background Color" Blur Effect -->
    <img [src]="data()?.leadingIcon?.filename" alt=""
      class="absolute h-5 w-5 scale-150 blur-md opacity-70 select-none pointer-events-none" aria-hidden="true"
      loading="lazy" decoding="async" />

    <!-- The Actual Crisp Foreground Image -->
    <img [src]="data()?.leadingIcon?.filename" [alt]="data()?.leadingIcon?.alt" class="relative h-5 w-5 z-10"
      loading="lazy" decoding="async" width="20" height="20" />
  </div>
  <div>
    <p class="text-[11px] font-semibold text-gray-500 uppercase">
      {{ data()?.title }}
    </p>
    <p class="mt-0.5 text-xs md:text-sm text-gray-800">
      {{ data()?.subtitle }}
    </p>
  </div>
</div>
  `,
})
export class ListTileComponent {
  data = input<IListTileContent>();
}



interface IListTileContent {
  title: string;
  subtitle: string;
  leadingIcon: {
    filename: string;
    alt: string;
  }
}