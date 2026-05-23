import { ChangeDetectionStrategy, Component, forwardRef, input, OnInit } from '@angular/core';

@Component({
  selector: 'section-component',
  imports: [],
   changeDetection:ChangeDetectionStrategy.OnPush,
  standalone:true,
  template: `
  `,
})
export class SectionComponent implements OnInit {
  blok = input<ISectionContent>()

  ngOnInit(): void {
  }
}

interface ISectionContent {
  items: any[];
}