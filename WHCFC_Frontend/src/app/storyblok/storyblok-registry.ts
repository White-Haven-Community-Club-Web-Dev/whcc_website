import { Type } from '@angular/core';
import { StoryblokComponentsMap } from '@storyblok/angular';
import { PageComponent } from '../components/page/page.component';

// Notice the type change: values are now functions returning a Promise of the Component Type
export const STORYBLOK_REGISTRY: StoryblokComponentsMap = {
    page: PageComponent,
    heroSection: () =>
        import('../components/hero/hero.component').then(m => m.HeroComponent),

    mainEvent: () =>
        import('../components/main-event/main-event.component').then(m => m.MainEventComponent),

    listTile: () =>
        import('../components/list-tile/list-tile.component').then(m => m.ListTileComponent),

    featuredEvents: () =>
        import('../components/featured-events/featured-events.component').then(m => m.FeaturedEventsComponent),

    eventCard: () =>
        import('../components/events-card/events-card.component').then(m => m.EventsCardComponent),

    statBoard: () =>
        import('../components/stat-board/stat-board.component').then(m => m.StatBoardComponent),

    statCard: () =>
        import('../components/stat-card/stat-card.component').then(m => m.StatCardComponent),

    gridSection: () =>
        import('../components/grid-section/grid-section.component').then(m => m.GridSectionComponent),

    section: () =>
        import('../components/section/section.component').then(m => m.SectionComponent),

    titleComponent: () =>
        import('../components/title-component/title-component.component').then(m => m.TitleComponent),

    photoCard: () =>
        import('../components/photo-card/photo-card.component').then(m => m.PhotoCardComponent)
};