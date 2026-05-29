import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'events-card',
  imports: [RouterLink],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
 <article class="flex  min-h-[350px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm">
    <div class="relative h-32">
        <img class="h-full w-full object-cover" [src]="blok().image.filename" [alt]="blok().image.alt"
            loading="lazy" decoding="async" />
        <span
            class="absolute right-3 top-3 rounded-full bg-emerald-600/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            {{ blok().tagText }}
        </span>
    </div>
    <div class="flex flex-1 flex-col p-4">
        <h3 class="text-sm font-semibold leading-snug text-slate-900">
            {{ blok().title }}
        </h3>
        <div class="mt-3 space-y-1 text-xs text-slate-600">
            <div class="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V6" stroke="#E0010D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 2V6" stroke="#E0010D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                        stroke="#E0010D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 10H21" stroke="#E0010D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>{{ blok().date }}</span>
            </div>
            <div class="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                        stroke="#1BAA76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                        stroke="#1BAA76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{{ blok().location }}</span>
            </div>
            <div class="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21.3333 28V25.3333C21.3333 23.9188 20.7714 22.5623 19.7712 21.5621C18.771 20.5619 17.4144 20 16 20H7.99996C6.58547 20 5.22892 20.5619 4.22872 21.5621C3.22853 22.5623 2.66663 23.9188 2.66663 25.3333V28"
                        stroke="#155DFC" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M21.3334 4.17065C22.477 4.46715 23.4899 5.13501 24.2129 6.0694C24.936 7.0038 25.3283 8.15184 25.3283 9.33332C25.3283 10.5148 24.936 11.6628 24.2129 12.5972C23.4899 13.5316 22.477 14.1995 21.3334 14.496"
                        stroke="#155DFC" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M29.3334 28V25.3333C29.3325 24.1516 28.9392 23.0037 28.2152 22.0698C27.4912 21.1358 26.4775 20.4688 25.3334 20.1733"
                        stroke="#155DFC" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M12 14.6667C14.9455 14.6667 17.3333 12.2789 17.3333 9.33333C17.3333 6.38781 14.9455 4 12 4C9.05444 4 6.66663 6.38781 6.66663 9.33333C6.66663 12.2789 9.05444 14.6667 12 14.6667Z"
                        stroke="#155DFC" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>{{ blok().eventFor }}</span>
            </div>
            @if (blok().description) {
            <div class="flex items-center gap-2 pt-2">
                <span class="text-xs">{{ blok().description }}</span>
            </div>
            }
        </div>
      
            <a [routerLink]="blok().link.cached_url"
                class="w-full rounded-lg border border-slate-200 mt-auto py-1.5 text-xs p-10 font-semibold text-slate-700 hover:bg-slate-50 hover:text-red-600 transition-colors">
                Learn More →
            </a>
    </div>
</article>
  `,
})
export class EventsCardComponent {
  blok = input.required<IEventCardContent>();
}


interface IEventCardContent {
  title: string;
  date: string;
  location: string;
  eventFor: string;
  description: String;
  image: { filename: string, alt: string };
  link: {
    cached_url: string
  };
  tagText: string
}