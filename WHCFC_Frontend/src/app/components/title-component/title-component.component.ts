import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'title-component',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  template: `
      <div [class]=" 'mb-12  '+blok().textDirection">
        @if(blok().capTitle){
          <p class="uppercase text-secondary tracking-[.3rem] py-5" >{{blok().capTitle}}</p>
        }
          <h2 [class]="'mb-6 font-title '+blok().textSize+' '+blok().textColor" [innerHTML]="blok().text" ></h2>
         @if(blok().showLine){
           <div [class]="'w-24 h-1.5 mx-auto mb-8 '+blok().lineColor"></div>
         }
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
  capTitle: string;
  showLine: boolean;
  textDirection: string
}