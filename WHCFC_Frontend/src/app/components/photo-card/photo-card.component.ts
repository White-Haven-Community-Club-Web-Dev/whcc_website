import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'photo-card',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
        <article
              class="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition">
              <div class="p-4 text-center">
                <div
                  class="mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-2xl bg-slate-100">
                  <img [src]="blok().image.filename" [alt]="blok().image.alt" class="h-full w-full object-cover"
                    loading="lazy" />
                </div>
                <h3 class="mt-4 text-sm font-semibold text-slate-900">
                  {{ blok().name }}
                </h3>
                <p class="mt-1 text-xs text-slate-600">
                  {{ blok().position }}
                </p>
              </div>
            </article>
  `,
})
export class PhotoCardComponent {
  readonly blok = input.required<IPhotoCardContent>();
}

interface IPhotoCardContent {
  image: { filename: string, alt: string };
  name: string;
  position: string;
}