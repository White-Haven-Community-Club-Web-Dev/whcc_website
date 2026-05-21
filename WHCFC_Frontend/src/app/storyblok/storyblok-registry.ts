import { Type } from '@angular/core';
import { HeroComponent } from '../components/hero/hero.component';
import { MainEventComponent } from '../components/main-event/main-event.component';
import { ListTileComponent } from '../components/list-tile/list-tile.component';
import { FeaturedEventsComponent } from '../components/featured-events/featured-events.component';
import { StatBoardComponent } from '../components/stat-board/stat-board.component';
import { EventsCardComponent } from '../components/events-card/events-card.component';
import { StatCardComponent } from '../components/stat-card/stat-card.component';


// Map Storyblok layout names to your actual component classes
export const STORYBLOK_REGISTRY: Record<string, Type<any>> = {
    heroSection: HeroComponent,
    mainEvent: MainEventComponent,
    listTile: ListTileComponent,
    featuredEvents: FeaturedEventsComponent,
    eventCard: EventsCardComponent,
    statBoard: StatBoardComponent,
    statCard: StatCardComponent
};