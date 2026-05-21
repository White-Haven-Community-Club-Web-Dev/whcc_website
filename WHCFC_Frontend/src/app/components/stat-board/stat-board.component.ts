import { Component, input } from '@angular/core';
import { StatCardComponent } from "../stat-card/stat-card.component";

@Component({
  selector: 'stat-board',
  imports: [StatCardComponent],
  template: `
    <section id="what-we-do" class="bg-slate-50 py-16 md:py-20">
      <div class="mx-auto max-w-6xl px-4 lg:px-0">
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-semibold text-slate-900">
            {{ data()?.title }}
          </h2>
          <p class="mt-2 text-sm text-slate-600">
          {{data()?.description}}
          </p>
        </div>
        <div class="mt-8 grid gap-5 grid-cols-2 lg:grid-cols-4">
          @for (stat of data()?.statCards; track stat) {
            <stat-card [data]="stat" />
          }
        </div>
      </div>
    </section>
  `,
})
export class StatBoardComponent {
  data = input<IStatBoardComponent>();
}

interface IStatBoardComponent {
  title: string;
  description: string;
  statCards: any[];
}