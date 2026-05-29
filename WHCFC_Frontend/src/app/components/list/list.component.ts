import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'list',
  imports: [],
  template: `
    @if(blok().listType=='ordered'){
      <ol class="list-decimal" >
        @for (item of blok().listItems.split("|"); track $index) {
          <li>{{item}}</li>
        }
      </ol>
    }
     @if(blok().listType=='u-ordered' ){
      <ul class="list-disc">
        @for (item of blok().listItems.split("|"); track $index) {
          <li>{{item}}</li>
        }
      </ul>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  blok = input.required<IListContent>();
}
interface IListContent{
  listType:string;
  listItems:string;
}
