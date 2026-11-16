import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DECEMBER_5_EVENT } from './december-5-event';

interface EducationalEventBlok {
  eventKey: string;
  // Set by the page renderer, not a Storyblok field.
  compact?: boolean;
}

@Component({
  selector: 'educational-event',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (event(); as event) {
    <section class="my-10 border-y border-emerald-100 bg-emerald-50 py-10 sm:my-14 sm:py-14">
      <div class="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div class="min-w-0">
          <p class="text-sm font-bold uppercase tracking-wider text-emerald-800">Featured educational session</p>
          <h2 class="mt-3 font-title text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            {{ event.title }}
          </h2>
          <p class="mt-4 max-w-prose leading-relaxed text-slate-700">{{ event.description }}</p>

          <dl class="mt-6 space-y-3 border-l-4 border-customGreen pl-4 text-sm text-slate-700 sm:text-base">
            <div>
              <dt class="font-semibold text-slate-900">Date and time</dt>
              <dd>{{ event.date }} &middot; {{ event.time }}</dd>
            </div>
            <div>
              <dt class="font-semibold text-slate-900">Venue</dt>
              <dd>{{ event.venue }}</dd>
            </div>
            @if (!blok().compact) {
              <div>
                <dt class="font-semibold text-slate-900">Trainer</dt>
                <dd>{{ event.trainer }}</dd>
              </div>
            }
            <div>
              <dt class="font-semibold text-slate-900">Participation</dt>
              <dd>{{ event.cost }} &middot; {{ event.audience }}</dd>
            </div>
          </dl>

            @if (!blok().compact) {
              <p class="mt-6 text-sm text-slate-700">Register online using Microsoft Forms.</p>
            }
            <a [href]="event.registrationUrl" target="_blank" rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark">
              Register Now <span aria-hidden="true">&rarr;</span><span class="sr-only"> (opens in a new tab)</span>
            </a>
        </div>

          <img [src]="event.flyerUrl" [alt]="'Official flyer for ' + event.title"
            width="1080" height="1350" loading="lazy" decoding="async"
            class="mx-auto h-auto w-full max-w-xs rounded-xl shadow-md sm:max-w-sm" />
      </div>
    </section>
    }
  `,
})
export class EducationalEventComponent {
  readonly blok = input.required<EducationalEventBlok>();
  readonly event = computed(() => this.blok().eventKey === DECEMBER_5_EVENT.eventKey ? DECEMBER_5_EVENT : undefined);
}
