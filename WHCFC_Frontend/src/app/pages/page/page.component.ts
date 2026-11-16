import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  OnInit,
  linkedSignal,
  input,
} from '@angular/core';
import {
  type Story,
  type SbBlokData,
  LivePreviewService,
  StoryblokComponent,
} from '@storyblok/angular';
import { DECEMBER_5_EVENT } from '../../components/educational-event/december-5-event';

const EVENT_COMPONENT = 'educationalEvent';

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent],
  template: `
      @if (storyContent()?.campaignBanner?.length) {
        @for (banner of storyContent().campaignBanner; track banner._uid) {
          <sb-component [sbBlok]="banner" />
        }
      }
    <sb-component [sbBlok]="storyContent()?.header" />
    <div class="mx-auto">
      <sb-component [sbBlok]="pageContent()" />
      @if (!storyContent()) {
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 class="text-yellow-800 text-xl font-semibold mb-2">No content found</h2>
        </div>
      }
    </div>
     <sb-component [sbBlok]="storyContent()?.footer" />
  `,
})
export class PageComponent implements OnInit {
  private readonly livePreview = inject(LivePreviewService);

  /** SSR source of truth */
  readonly storyInput = input<Story | null>(null, { alias: 'story' });

  /** Writable signal linked to input - allows bridge updates */
  readonly story = linkedSignal(() => this.storyInput());

  readonly storyContent = computed(() => this.story()?.content as any | undefined);

  readonly pageContent = computed(() => {
    const content = this.storyContent();
    const slug = this.story()?.full_slug;
    if (content?.component !== 'page' || (slug !== 'home' && slug !== 'educational-session')) {
      return content;
    }

    const compact = slug === 'home';
    const body: SbBlokData[] = content.body ?? [];
    const cmsEvent = body.find(blok =>
      blok.component === EVENT_COMPONENT && blok['eventKey'] === DECEMBER_5_EVENT.eventKey,
    );
    if (cmsEvent) {
      return { ...content, body: body.map(blok => blok === cmsEvent ? { ...blok, compact } : blok) };
    }

    // Keep the existing blocks in place and let a matching editable block replace the fallback.
    const introIndex = body.findIndex(blok => slug === 'home'
      ? ['reusableHero', 'landingHeroSection', 'heroSection'].includes(blok.component ?? '')
      : blok.component === 'titleComponent');
    const index = introIndex < 0 ? body.length : introIndex + 1;
    return {
      ...content,
      body: [
        ...body.slice(0, index),
        {
          _uid: '8a39b745-7471-46ab-a502-d33ce89327ef',
          component: EVENT_COMPONENT,
          eventKey: DECEMBER_5_EVENT.eventKey,
          compact,
        },
        ...body.slice(index),
      ],
    };
  });

  ngOnInit(): void {
    // Enable live preview for real-time editing in the Visual Editor
    this.livePreview.listen((updatedStory) => {
      this.story.set(updatedStory);
    });
  }
}
