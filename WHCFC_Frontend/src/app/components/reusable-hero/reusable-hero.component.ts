import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export interface ReusableHeroData {
  eyebrow?: string;
  heading?: string;
  /** Exact, case-sensitive phrases from heading, one per line. */
  highlightedText?: string;
  description?: string;
  backgroundImage?: {
    filename?: string;
    alt?: string | null;
  };
}

@Component({
  selector: 'reusable-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (blok(); as content) {
      <section class="relative isolate flex min-h-[420px] w-full items-end overflow-hidden bg-gray-950 px-6 py-12 text-left text-white sm:min-h-[clamp(420px,43vw,620px)] sm:px-[10%] sm:py-14 lg:py-20">
        @if (content.backgroundImage?.filename; as imageUrl) {
          <img
            [src]="imageUrl"
            alt=""
            class="absolute inset-0 -z-20 h-full w-full object-cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        }
        <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/80 via-gray-950/60 to-gray-950/30" aria-hidden="true"></div>

        <div class="mx-auto w-full max-w-7xl">
          @if (content.eyebrow?.trim()) {
            <p class="mb-2 text-[10px] font-bold uppercase tracking-wider text-green-300 sm:text-xs">
              {{ content.eyebrow }}
            </p>
          }
          @if (content.heading?.trim()) {
            <h1 class="max-w-[23ch] break-words whitespace-pre-line font-main text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-5xl xl:text-6xl">
              @for (segment of headingSegments(); track $index) {
                <span [class.text-green-400]="segment.highlighted">{{ segment.text }}</span>
              }
            </h1>
          }
          @if (content.description?.trim()) {
            <p class="mt-5 max-w-[46ch] break-words whitespace-pre-line font-main text-sm font-medium leading-relaxed text-white sm:mt-6 sm:max-w-[58ch] sm:text-xs sm:leading-snug lg:text-base">
              {{ content.description }}
            </p>
          }
        </div>
      </section>
    }
  `,
})
export class ReusableHeroComponent {
  readonly blok = input<ReusableHeroData | null>(null);

  readonly headingSegments = computed(() => {
    const heading = this.blok()?.heading ?? '';
    const phrases = [...new Set(
      (this.blok()?.highlightedText ?? '').split(/\r?\n/).map(text => text.trim()).filter(Boolean),
    )].sort((a, b) => b.length - a.length);

    if (!phrases.length) return [{ text: heading, highlighted: false }];

    // Escape editor input so punctuation is treated as text, not a regular expression.
    // Longest phrases take precedence when selections overlap.
    const pattern = phrases.map(text => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
    const highlighted = new Set(phrases);

    return heading.split(new RegExp(`(${pattern})`, 'g'))
      .filter(Boolean)
      .map(text => ({ text, highlighted: highlighted.has(text) }));
  });
}
