import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'action-button',
  imports: [RouterLink],
  template: `
  <div class="w-full flex my-4">
 
     <a [routerLink]="blok().link.cahced_url" [class]="'hidden lg:inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-s font-semibold text-white shadow hover:bg-red-700 mx-auto text-center'"  >{{blok().title}}</a>

  </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionButtonComponent {
  readonly blok = input.required<IActionButtonContent>();
}
interface IActionButtonContent {
  title: string
  link: { linktype: "story" | "url", cahced_url: string }
}