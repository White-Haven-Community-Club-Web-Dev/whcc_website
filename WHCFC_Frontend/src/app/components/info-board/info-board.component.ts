import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'info-board',
  imports: [],
  standalone:true,
  template: `
     <div class="mt-12 bg-background mx-auto px-auto max-w-6xl rounded-lg p-8 text-center">
      <p class="text-muted-foreground mb-4">
        {{blok().text1}}
      </p>
      <div [class]="blok().text2Color+' '" [innerHTML]="blok().text2" ></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoBoardComponent {
  blok = input.required<IInfoBoardContent>()
}

interface IInfoBoardContent {
  text1: string;
  text2: string;
  text1Color: string;
  text2Color: string;
}