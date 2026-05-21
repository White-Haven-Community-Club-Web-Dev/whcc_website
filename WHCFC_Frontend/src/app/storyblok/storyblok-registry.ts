import { Type } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { MainEventComponent } from '../components/main-event/main-event.component';
import { ListTileComponent } from '../components/list-tile/list-tile.component';


// Map Storyblok layout names to your actual component classes
export const STORYBLOK_REGISTRY: Record<string, Type<any>> = {
    heroSection: HeroComponent,
    mainEvent: MainEventComponent,
    listTile: ListTileComponent
};