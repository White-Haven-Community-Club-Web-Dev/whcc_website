import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'title-component',
  imports: [],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
    <p>
      title-component works!
    </p>
  `,
})
export class TitleComponent {

}
