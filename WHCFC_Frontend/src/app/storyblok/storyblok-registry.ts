import { Type } from '@angular/core';
import { StoryblokComponentsMap } from '@storyblok/angular';
import { PageComponent } from '../components/page/page.component';
import { WcccEventsPageComponent } from '../pages/wccc-events-page/wccc-events-page.component';

// Notice the type change: values are now functions returning a Promise of the Component Type
export const STORYBLOK_REGISTRY: StoryblokComponentsMap = {
    page: PageComponent,
    scPage: WcccEventsPageComponent,
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
        import('../components/photo-card/photo-card.component').then(m => m.PhotoCardComponent),
    grid: () => import('../components/grid/grid.component').then(m => m.GridComponent),
    cardWithIcon: () => import('../components/card-with-icon/card-with-icon.component').then(m => m.CardWithIconComponent),
    featureCard: () => import('../components/feature-card/feature-card.component').then(m => m.FeatureCardComponent),
    infoBoard: () => import('../components/info-board/info-board.component').then(m => m.InfoBoardComponent),
    faqCard: () => import('../components/faq-card/faq-card.component').then(m => m.FaqCardComponent),
    faqSection: () => import('../components/faq-section/faq-section.component').then(m => m.FaqSectionComponent),
    testimonialComponent: () => import('../components/testimonial-section/testimonial-section.component').then(m => m.TestimonialSectionComponent),
    videoLink: () => import('../components/video-link/video-link.component').then(m => m.VideoLinkComponent),
    flex: () => import('../components/flex/flex.component').then(m => m.FlexComponent),
    list: () => import('../components/list/list.component').then(m => m.ListComponent),
    listCard: () => import('../components/list-card/list-card.component').then(m => m.ListCardComponent),
    actionButton: () => import('../components/action-button/action-button.component').then(m => m.ActionButtonComponent),
    header: () => import('../components/header/header.component').then(m => m.HeaderComponent),
    headerLink: () => import('../components/header-link/header-link.component').then(m => m.HeaderLinkComponent),
    footer: () => import('../components/footer/footer.component').then(m => m.FooterComponent),
    activeEducationSection: () => import('../components/active-event-card/active-event-card.component').then(m => m.ActiveEventCardComponent)
};