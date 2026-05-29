import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'card-with-icon',
  imports: [],
  template: `
      <div [class]="' p-5 h-full overflow-hidden  rounded-lg bg-opacity-5 border-border border hover:shadow-card flex gap-5  flex-col justify-start transition-shadow duration-300 '+blok().alignment+' '+blok().background">
           <div class="relative h-16 w-16 rounded-full flex items-center justify-center overflow-hidden">
    <!-- The "Background Color" Blur Effect -->
    <img [src]="blok().icon.filename" alt=""
      class="absolute h-16 w-16 scale-[2] blur-md opacity-30 select-none pointer-events-none" aria-hidden="true"
      loading="lazy" decoding="async" />

    <!-- The Actual Crisp Foreground Image -->
    <img [src]="blok().icon.filename" [alt]="blok().icon.alt" class="relative h-6 w-6 z-10"
      loading="lazy" decoding="async" width="20" height="20" />
  </div>
        <h3 class="text-2xl font-title  text-foreground mb-2">{{blok().title}}</h3>
        <div class="text-muted-foreground"[innerHTML]="blok().content" ></div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CardWithIconComponent {
  blok = input.required<ICardWithIconContent>();
}
interface ICardWithIconContent {
  icon: { filename: string; alt: string }
  title: string;
  content: string;
  background: string;
  alignment: string;
}