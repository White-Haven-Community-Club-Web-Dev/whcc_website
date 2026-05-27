import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'title-component',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
      <div class="text-center mb-12">
          <h2 [class]="'mb-6 font-semibold lg:text-5xl  font-title '+blok().textSize+' '+blok().textColor">{{ blok().text }}</h2>
          <div [class]="'w-24 h-1.5 mx-auto mb-8 '+blok().lineColor"></div>
       @if(blok().description){
              <p class="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">  {{blok().description}} </p>
          }
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
  description: string;
}