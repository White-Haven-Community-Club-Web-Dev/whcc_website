import { Component, input, computed } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { STORYBLOK_REGISTRY } from './storyblok-registry';

@Component({
  selector: 'app-storyblok-wrapper',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    @if (componentType()) {
      <!-- Native Angular dynamic engine -->
      <ng-container *ngComponentOutlet="componentType(); inputs: { data: data() }" />
    } @else {
      <!-- Graceful fallback if a block isn't mapped yet -->
      <div style="border: 1px dashed red; padding: 10px;">
        Unknown Block Type: <strong>{{ data().component }}</strong>
      </div>
    }
  `
})
export class StoryblokWrapperComponent {
  // Receives an individual raw JSON block object from the loop
  data = input.required<any>();

  // Look up the matching component class reactively via a computed signal
  componentType = computed(() => {
    const blockName = this.data().component;        
    return STORYBLOK_REGISTRY[blockName] || null;
  });
}