import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

export type PathwayLayout = 'full' | 'program' | 'compact';

/** Storyblok block `pathwayStage`: one stage of the pathway. */
export interface PathwayStageBlok {
  _uid?: string;
  component?: string;
  key?: string;
  name?: string;
  experience?: string;
  impact?: string;
  details?: string;
}

/** Content of the Storyblok story `pathway` (content type `pathwayDefinition`). */
export interface PathwayDefinitionContent {
  eyebrow?: string;
  title?: string;
  stages?: PathwayStageBlok[];
}

export interface PathwayStoryReference {
  content?: PathwayDefinitionContent;
}

export interface PathwayLink {
  linktype?: string;
  url?: string;
  cached_url?: string;
  anchor?: string;
}

/** Storyblok block `pathwayBlock`. */
export interface PathwayBlok {
  /**
   * Reference to the `pathway` story. It arrives as the story object when the relation
   * `pathwayBlock.pathway` is resolved, and as a uuid string when it is not.
   */
  pathway?: PathwayStoryReference | string | (PathwayStoryReference | string)[] | null;
  layout?: PathwayLayout;
  currentStage?: string;
  currentStageLabel?: string;
  featuredLink?: PathwayLink;
  featuredLinkText?: string;
}

interface StagePanel {
  id: string;
  label: string;
  text: string;
}

interface StageView {
  key: string;
  name: string;
  nameParts: string[];
  experience: string;
  current: boolean;
  last: boolean;
  endOfRow: boolean;
  panels: StagePanel[];
}

type FeaturedLink = { route: string; fragment?: string } | { href: string };

let nextPathwayId = 0;

const text = (value: unknown): string => (typeof value === 'string' ? value.trim() : '');
const idPart = (value: string): string => value.toLowerCase().replace(/[^a-z0-9_-]+/g, '-');

@Component({
  selector: 'pathway-block',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (stages().length) {
      <section [attr.aria-labelledby]="title() ? titleId : null" [attr.data-layout]="layout()">
        @if (layout() === 'compact') {
          <div class="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_16px_30px_rgba(15,23,42,0.10)] md:p-6">
            @if (eyebrow()) {
              <p class="text-sm uppercase tracking-[.3rem] text-emerald-800">{{ eyebrow() }}</p>
            }
            @if (title()) {
              <h2 [id]="titleId" class="mt-2 font-title text-2xl font-semibold text-slate-900 md:text-3xl">{{ title() }}</h2>
            }
            <ol class="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              @for (stage of stages(); track $index) {
                <li class="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2"
                  [attr.data-stage]="stage.key" [attr.aria-current]="stage.current ? 'step' : null">
                  <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-title text-sm font-bold"
                    [class]="stage.current ? 'bg-emerald-800 text-white' : 'bg-white text-primary ring-2 ring-inset ring-primary'">{{ $index + 1 }}</span>
                  <span class="min-w-0 font-title text-base font-semibold leading-tight text-slate-900">
                    @for (part of stage.nameParts; track $index) {@if (!$first) {<wbr>}{{ part }}}
                    @if (stage.current && currentStageLabel()) {
                      <span class="block font-main text-xs font-bold uppercase tracking-wider text-emerald-800">{{ currentStageLabel() }}</span>
                    }
                  </span>
                </li>
              }
            </ol>
            @if (featuredLink(); as link) {
              <p class="mt-5">
                @if (isRoute(link)) {
                  <a [routerLink]="link.route" [fragment]="link.fragment"
                    class="inline-flex min-h-[44px] items-center font-semibold text-slate-900 underline decoration-2 underline-offset-4 hover:text-primary-dark">{{ featuredLinkText() }}</a>
                } @else {
                  <a [href]="link.href"
                    class="inline-flex min-h-[44px] items-center font-semibold text-slate-900 underline decoration-2 underline-offset-4 hover:text-primary-dark">{{ featuredLinkText() }}</a>
                }
              </p>
            }
          </div>
        } @else {
          <div class="mx-auto max-w-6xl px-4 py-8 lg:px-0">
            @if (eyebrow()) {
              <p class="text-sm uppercase tracking-[.3rem] text-emerald-800" [class.text-center]="layout() === 'full'">{{ eyebrow() }}</p>
            }
            @if (title()) {
              <h2 [id]="titleId" class="font-title text-3xl text-primary"
                [class]="layout() === 'full' ? 'mx-auto mt-4 max-w-3xl text-center md:text-5xl' : 'mt-3 md:text-4xl'">{{ title() }}</h2>
            }
            @if (layout() === 'full') {
              <div class="mx-auto mt-5 h-1.5 w-24 bg-primary" aria-hidden="true"></div>
            }
            <ol class="mt-8 grid md:mt-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6">
              @for (stage of stages(); track $index) {
                <li class="relative pl-14 md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0 md:pb-10 md:pl-0 lg:pb-0"
                  [class.pb-8]="!stage.last" [attr.data-stage]="stage.key" [attr.aria-current]="stage.current ? 'step' : null">
                  @if (!stage.last) {
                    <span aria-hidden="true" class="pointer-events-none absolute bottom-0 left-[17px] top-10 w-0.5 bg-primary md:hidden"></span>
                    <span aria-hidden="true" class="pointer-events-none absolute left-11 right-[-12px] top-[17px] hidden h-0.5 bg-primary"
                      [class]="stage.endOfRow ? 'lg:block' : 'md:block'"></span>
                  }
                  <span class="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full font-title text-base font-bold md:static"
                    [class]="stage.current ? 'bg-emerald-800 text-white' : 'bg-white text-primary ring-2 ring-inset ring-primary'">{{ $index + 1 }}</span>
                  <h3 class="pt-1 font-title text-xl font-semibold leading-tight text-slate-900 md:pt-3">
                    @for (part of stage.nameParts; track $index) {@if (!$first) {<wbr>}{{ part }}}
                    @if (stage.current && currentStageLabel()) {
                      <span class="mt-1 block font-main text-xs font-bold uppercase tracking-wider text-emerald-800">{{ currentStageLabel() }}</span>
                    }
                  </h3>
                  <div>
                    @if (stage.experience) {
                      <p class="mt-2 whitespace-pre-line leading-relaxed text-slate-700">{{ stage.experience }}</p>
                    }
                  </div>
                  <div>
                    @for (panel of stage.panels; track panel.id) {
                      <div class="mt-3">
                        <button type="button" (click)="toggle(panel.id)"
                          [attr.aria-expanded]="isOpen(panel.id)" [attr.aria-controls]="panel.id"
                          class="group inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-400 bg-white px-4 font-semibold text-slate-900 hover:border-emerald-800 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 aria-expanded:border-emerald-800 aria-expanded:bg-emerald-50 aria-expanded:text-emerald-800">
                          {{ panel.label }}<span class="sr-only">: {{ stage.name }}</span>
                          <svg class="h-3 w-3 shrink-0 group-aria-expanded:rotate-180" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                        </button>
                        <p [id]="panel.id" [hidden]="!isOpen(panel.id)"
                          class="mt-3 whitespace-pre-line border-l-4 border-emerald-800 pl-3 leading-relaxed text-slate-700">{{ panel.text }}</p>
                      </div>
                    }
                  </div>
                </li>
              }
            </ol>
          </div>
        }
      </section>
    }
  `,
})
export class PathwayComponent {
  readonly blok = input.required<PathwayBlok>();

  private readonly uid = `pathway-${++nextPathwayId}`;
  readonly titleId = `${this.uid}-title`;
  private readonly openPanels = signal<ReadonlySet<string>>(new Set());

  readonly layout = computed<PathwayLayout>(() => {
    const layout = this.blok().layout;
    return layout === 'program' || layout === 'compact' ? layout : 'full';
  });

  private readonly definition = computed<PathwayDefinitionContent | undefined>(() => {
    const reference = this.blok().pathway;
    const story = Array.isArray(reference) ? reference[0] : reference;
    return story && typeof story === 'object' ? story.content : undefined;
  });

  readonly eyebrow = computed(() => text(this.definition()?.eyebrow));
  readonly title = computed(() => text(this.definition()?.title));
  readonly currentStageLabel = computed(() => text(this.blok().currentStageLabel));
  readonly featuredLinkText = computed(() => text(this.blok().featuredLinkText) || 'See the six stages of our pathway');

  readonly stages = computed<StageView[]>(() => {
    const stages = this.definition()?.stages;
    const named = (Array.isArray(stages) ? stages : []).filter((stage) => text(stage?.name));
    const current = text(this.blok().currentStage);
    return named.map((stage, index) => {
      const key = text(stage.key) || text(stage._uid) || String(index + 1);
      const name = text(stage.name);
      const panels = [
        { kind: 'impact', label: 'Impact', text: text(stage.impact) },
        { kind: 'details', label: 'Details', text: text(stage.details) },
      ];
      return {
        key,
        name,
        nameParts: name.split(/(?<=\/)/),
        experience: text(stage.experience),
        current: !!current && key === current,
        last: index === named.length - 1,
        endOfRow: index % 3 === 2,
        panels: panels
          .filter((panel) => panel.text)
          .map((panel) => ({ id: `${this.uid}-${idPart(key)}-${panel.kind}`, label: panel.label, text: panel.text })),
      };
    });
  });

  readonly featuredLink = computed<FeaturedLink | null>(() => {
    const link = this.blok().featuredLink;
    if (link?.linktype === 'story') {
      const slug = text(link.cached_url).replace(/^\/+/, '');
      return slug ? { route: '/' + slug, fragment: text(link.anchor) || undefined } : null;
    }
    const url = text(link?.url) || text(link?.cached_url);
    return /^https?:\/\//i.test(url) ? { href: url } : null;
  });

  isRoute(link: FeaturedLink): link is { route: string; fragment?: string } {
    return 'route' in link;
  }

  isOpen(id: string): boolean {
    return this.openPanels().has(id);
  }

  toggle(id: string): void {
    this.openPanels.update((open) => {
      const next = new Set(open);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }
}
