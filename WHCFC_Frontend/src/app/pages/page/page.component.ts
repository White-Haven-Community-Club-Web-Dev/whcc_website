import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  OnInit,
  linkedSignal,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  type Story,
  type SbBlokData,
  LivePreviewService,
  StoryblokComponent,
} from '@storyblok/angular';

const EDUCATION_SLUG = 'educational-session';

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent, RouterLink],
  template: `
      @if (storyContent()?.campaignBanner?.length) {
        @for (banner of storyContent().campaignBanner; track banner._uid) {
          <sb-component [sbBlok]="banner" />
        }
      }
    <sb-component [sbBlok]="storyContent()?.header" />
    <div class="mx-auto">
      <sb-component [sbBlok]="storyContent()" />
      @if (!storyContent()) {
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 class="text-yellow-800 text-xl font-semibold mb-2">No content found</h2>
        </div>
      }
    </div>
    @if (isHome()) {
      <section class="border-t border-emerald-100 bg-emerald-50" aria-labelledby="education-promo-heading">
        <div class="mx-auto flex max-w-6xl flex-col items-start gap-5 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 id="education-promo-heading" class="font-title text-2xl font-semibold text-slate-900 sm:text-3xl">
              Free Community Education Program
            </h2>
            <p class="mt-2 max-w-xl leading-relaxed text-slate-700">
              Explore free workshops that help community members build practical life, work, and leadership skills.
            </p>
          </div>
          <a [routerLink]="educationPath"
             class="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-dark">
            Explore Educational Sessions <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>
    }
     <sb-component [sbBlok]="storyContent()?.footer" />
  `,
})
export class PageComponent implements OnInit {
  private readonly livePreview = inject(LivePreviewService);

  /** SSR source of truth */
  readonly storyInput = input<Story | null>(null, { alias: 'story' });

  /** Writable signal linked to input - allows bridge updates */
  readonly story = linkedSignal(() => this.storyInput());

  readonly educationPath = `/${EDUCATION_SLUG}`;
  readonly isHome = computed(() => this.story()?.full_slug === 'home');

  readonly storyContent = computed(() => {
    const story = this.story();
    const content = story?.content as any | undefined;
    if (story?.full_slug !== EDUCATION_SLUG || content?.component !== 'page') return content;

    // The Education intro is the first top-level title. Give it page-heading semantics
    // in the render data, leaving the Storyblok content and nested headings intact.
    const body: SbBlokData[] = content.body ?? [];
    const introIndex = body.findIndex(blok => blok.component === 'titleComponent');

    return {
      ...content,
      body: body.map((blok, index) => {
        if (index === introIndex) return { ...blok, isPageHeading: true };
        const items = blok['items'];
        if (blok.component !== 'section' || !Array.isArray(items)) return blok;

        // Keep the trainer biography editable in Storyblok, but render it without artwork.
        const trainer = items.find((item: SbBlokData) =>
          item.component === 'gridSection' && item['capTitle'] === 'Trainer',
        );
        if (!trainer) return blok;

        return { ...blok, items: items.map(item => item === trainer ? { ...item, textOnly: true } : item) };
      }),
    };
  });

  ngOnInit(): void {
    // Enable live preview for real-time editing in the Visual Editor
    this.livePreview.listen((updatedStory) => {
      this.story.set(updatedStory);
    });
  }
}
