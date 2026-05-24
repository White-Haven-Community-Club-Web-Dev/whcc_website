import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'title-component',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
      <div class="text-center mb-12">
          <h2 [class]="'mb-6 font-bold  '+blok().textSize+' '+blok().textColor">{{ blok().text }}</h2>
          <div [class]="'w-24 h-1.5 mx-auto mb-8 '+blok().lineColor"></div>
        </div>
  `,
})
export class TitleComponent {
  readonly blok = input.required<ITitleContent>()

}
interface ITitleContent {
  text: string
  textSize: string;
  textColor: string;
  lineColor: string;
}