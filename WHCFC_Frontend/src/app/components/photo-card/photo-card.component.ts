import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'photo-card',
  imports: [],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
    <p>
      photo-card works!
    </p>
  `,
})
export class PhotoCardComponent {

}
