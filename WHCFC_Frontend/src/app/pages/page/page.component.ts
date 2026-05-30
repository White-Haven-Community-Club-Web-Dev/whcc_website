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

@Component({
  selector: 'app-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent],
  template: `
    <sb-component [sbBlok]="storyContent()?.header" />
    <div class="mx-auto">
      <sb-component [sbBlok]="storyContent()" />
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

  ngOnInit(): void {
    // Enable live preview for real-time editing in the Visual Editor
    this.livePreview.listen((updatedStory) => {
      this.story.set(updatedStory);
    });
  }
}