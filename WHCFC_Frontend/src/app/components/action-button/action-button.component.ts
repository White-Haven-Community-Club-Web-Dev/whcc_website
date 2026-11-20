import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'action-button',
  imports: [RouterLink],
  template: `
    <div class="w-full flex my-4">

      @if (blok().link.linktype === 'story') {
        <a
          [routerLink]="'/' + blok().link.cached_url"
          [class]="buttonClasses"
        >
          {{ blok().title }}
        </a>
      }

      @if (blok().link.linktype === 'url') {
        <a
          [href]="blok().link.cached_url"
          [class]="buttonClasses"
        >
          {{ blok().title }}
        </a>
      }

    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  readonly blok = input.required<IActionButtonContent>();

  get buttonClasses(): string {
    const base =
      'inline-flex items-center justify-center rounded-lg border-2 px-4 py-2 text-sm font-semibold shadow-sm mx-auto text-center transition-colors';

    const style =
      this.blok().button_style === 'outline'
        ? 'bg-white border-red-600 text-red-600 hover:bg-red-50'
        : 'bg-red-600 border-red-600 text-white hover:bg-red-700 hover:border-red-700';

    return `${base} ${style}`;
  }
}

interface IActionButtonContent {
  title: string;
  button_style?: 'primary' | 'outline';
  link: {
    linktype: 'story' | 'url';
    cached_url: string;
  };
}
