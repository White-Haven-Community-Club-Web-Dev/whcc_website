import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'feature-card',
  imports: [],
  template: `
    <div class="bg-white min-h-[500px] max-h-[500px] rounded-lg overflow-hidden shadow-card hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-64 overflow-hidden">
          <img [src]="blok().image.filename" [alt]="blok().title"
            class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-4 left-4">
           <div class="relative h-16 w-16 rounded-full bg-primary flex items-center justify-center overflow-hidden">
    <!-- The "Background Color" Blur Effect
    <img [src]="blok().icon.filename" alt=""
      class="absolute h-24 w-24 scale-[10] blur-md  select-none pointer-events-none" aria-hidden="true"
      loading="lazy" decoding="async" /> -->

    <!-- The Actual Crisp Foreground Image -->
    <img [src]="blok().icon.filename" [alt]="blok().icon.alt" class="relative h-6 w-6 z-10"
      loading="lazy" decoding="async" width="20" height="20" />
  </div>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-title text-primary mb-2">{{blok().title}}</h3>
          <p class="text-muted-foreground">{{blok().content}}</p>
        </div>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureCardComponent {
  blok = input.required<IFeatureCardContent>();
}



interface IFeatureCardContent {
  text: string;
  image: { filename: string }
  icon: { filename: string; alt: string }
  title: string;
  content: string;
}