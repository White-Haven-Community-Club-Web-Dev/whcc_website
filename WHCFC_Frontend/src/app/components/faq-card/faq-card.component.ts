import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'faq-card',
  imports: [],
  standalone: true,
  template: `
    <div [class]="!blok().lastCard ?'border-b border-gray-200':'' ">
        <button (click)="toggle()"
          class="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors">
          <span class="font-title text-lg text-[#212529] pr-8">{{blok().question}}</span>
          <svg class="w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300"
            [class.rotate-180]="show()" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="overflow-hidden transition-all duration-300" [class.max-h-96]="show()"
          [class.pb-6]="show()" [class.max-h-0]="!show()">
          <p class="text-[#6C757D] leading-relaxed">{{blok().answer}}</p>
        </div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqCardComponent {
  blok = input.required<IFaqCardContent>();
  show = signal(false)
  toggle = () => this.show.update(v => !v);
}

interface IFaqCardContent {
  question: string;
  answer: string;
  lastCard: boolean
}