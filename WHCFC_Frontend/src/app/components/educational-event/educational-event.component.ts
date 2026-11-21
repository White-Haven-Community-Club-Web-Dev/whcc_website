import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface EducationalEventBlok {
  title: string;
  date: string;
  time: string;
  description?: string;
  venue?: string;
  trainer?: string;
  audience?: string;
  cost?: string;
  flyer?: { filename?: string; alt?: string };
  registrationUrl?: { linktype?: string; url?: string; cached_url?: string };
  buttonText?: string;
  layout?: 'compact' | 'full';
  /** Textarea in Storyblok, one learning outcome per line. Shown in the full layout only. */
  learningOutcomes?: string;
}

@Component({
  selector: 'educational-event',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (blok(); as event) {
    <section class="my-10 border-y border-emerald-100 bg-emerald-50 py-10 sm:my-14 sm:py-14">
      <div class="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:px-8"
        [class.md:grid-cols-2]="!!event.flyer?.filename">
        <div class="min-w-0">
          <p class="text-sm font-bold uppercase tracking-wider text-emerald-800">Featured educational session</p>
          <h2 class="mt-3 font-title text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            {{ event.title }}
          </h2>
          @if (event.description) {
            <p class="mt-4 max-w-prose leading-relaxed text-slate-700">{{ event.description }}</p>
          }

          <dl class="mt-6 space-y-3 border-l-4 border-customGreen pl-4 text-sm text-slate-700 sm:text-base">
            <div>
              <dt class="font-semibold text-slate-900">Date and time</dt>
              <dd>{{ event.date }} &middot; {{ event.time }}</dd>
            </div>
            @if (event.venue) {
              <div>
                <dt class="font-semibold text-slate-900">Venue</dt>
                <dd>{{ event.venue }}</dd>
              </div>
            }
            @if (event.layout !== 'compact' && event.trainer) {
              <div>
                <dt class="font-semibold text-slate-900">Trainer</dt>
                <dd>{{ event.trainer }}</dd>
              </div>
            }
            @if (event.cost || event.audience) {
              <div>
                <dt class="font-semibold text-slate-900">Participation</dt>
                <dd>{{ event.cost }}@if (event.cost && event.audience) { &middot; }{{ event.audience }}</dd>
              </div>
            }
          </dl>

          @if (event.layout !== 'compact' && learningOutcomes().length) {
            <h3 class="mt-6 font-title text-xl font-semibold text-slate-900">What you will learn</h3>
            <ul class="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
              @for (outcome of learningOutcomes(); track $index) {
                <li>{{ outcome }}</li>
              }
            </ul>
          }

          @if (registrationUrl(); as url) {
            <a [href]="url" target="_blank" rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark">
              {{ event.buttonText || 'Register Now' }} <span aria-hidden="true">&rarr;</span><span class="sr-only"> (opens in a new tab)</span>
            </a>
          }
        </div>

        @if (event.flyer?.filename; as filename) {
          <img [src]="filename" [alt]="event.flyer?.alt || 'Official flyer for ' + event.title"
            loading="lazy" decoding="async"
            class="mx-auto h-auto w-full max-w-xs rounded-xl shadow-md sm:max-w-sm" />
        }
      </div>
    </section>
    }
  `,
})
export class EducationalEventComponent {
  readonly blok = input.required<EducationalEventBlok>();
  readonly learningOutcomes = computed(() =>
    (this.blok().learningOutcomes || '').split('\n').map((line) => line.trim()).filter(Boolean)
  );
  readonly registrationUrl = computed(() => {
    const link = this.blok().registrationUrl;
    if (link?.linktype === 'story') {
      const slug = link.cached_url?.trim();
      return slug ? '/' + slug.replace(/^\/+/, '') : '';
    }
    const url = (link?.url || link?.cached_url || '').trim();
    return /^https?:\/\//i.test(url) ? url : '';
  });
}
