import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StoryblokComponent } from "@storyblok/angular";

@Component({
  selector: 'stat-board',
  imports: [StoryblokComponent],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
    <section id="what-we-do" class="bg-slate-50 py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 lg:px-0">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">
            {{ blok()?.title }}
          </h2>
          <p class="mt-2 text-sm text-slate-600">
          {{blok()?.description}}
          </p>
        </div>
         <sb-component class="mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4" [sbBlok]="blok()?.statCards" />
      </div>
    </section>
  `,
})
export class StatBoardComponent {
  blok = input<IStatBoardComponent>();
}

interface IStatBoardComponent {
  title: string;
  description: string;
  statCards: any[];
}