import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalButton extends Struct.ComponentSchema {
  collectionName: 'components_global_buttons';
  info: {
    description: 'Reusable CTA button';
    displayName: 'Button';
    icon: 'cursor';
  };
  attributes: {
    icon_left: Schema.Attribute.Media<'images'>;
    icon_right: Schema.Attribute.Media<'images'>;
    is_external: Schema.Attribute.Boolean;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'light', 'dark', 'link']
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalContactInfoBox extends Struct.ComponentSchema {
  collectionName: 'components_global_contact_info_boxes';
  info: {
    description: 'Structured block for email, phone, address, office hours and social links';
    displayName: 'Contact Info Box';
    icon: 'envelop';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    office_hours: Schema.Attribute.Component<'global.hours', true>;
    phone: Schema.Attribute.String;
    social_links: Schema.Attribute.Component<'global.social-link', true>;
  };
}

export interface GlobalHours extends Struct.ComponentSchema {
  collectionName: 'components_global_hours';
  info: {
    description: 'Opening or activity hours entry';
    displayName: 'Hours';
    icon: 'time';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    note: Schema.Attribute.String;
    time_range: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalRichPoint extends Struct.ComponentSchema {
  collectionName: 'components_global_rich_points';
  info: {
    description: 'Reusable bullet/point item with optional description';
    displayName: 'Rich Point';
    icon: 'dot-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalSeo extends Struct.ComponentSchema {
  collectionName: 'components_global_seos';
  info: {
    description: 'SEO metadata for pages';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    preventIndexing: Schema.Attribute.Boolean;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface GlobalSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_global_social_links';
  info: {
    description: 'Single social media profile link';
    displayName: 'Social Link';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      [
        'facebook',
        'instagram',
        'twitter',
        'tiktok',
        'youtube',
        'linkedin',
        'other',
      ]
    >;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    username: Schema.Attribute.String;
  };
}

export interface WhatWeDoChecklistItem extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_checklist_items';
  info: {
    description: 'Simple checklist/bullet item used in What We Do sections';
    displayName: 'WWD Checklist Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhatWeDoCtaBlock extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_cta_blocks';
  info: {
    description: 'Call-to-action block with title, text and button';
    displayName: 'WWD CTA Block';
    icon: 'cursor';
  };
  attributes: {
    body: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    primary_label: Schema.Attribute.String & Schema.Attribute.Required;
    primary_url: Schema.Attribute.String & Schema.Attribute.Required;
    secondary_label: Schema.Attribute.String;
    secondary_url: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhatWeDoProgramCard extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_program_cards';
  info: {
    description: 'A program section showing an image, title, text, and link';
    displayName: 'Program Card';
    icon: 'grid';
  };
  attributes: {
    button_label: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhatWeDoProgramInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_program_info_blocks';
  info: {
    description: 'Program details such as date, time, venue and audience';
    displayName: 'WWD Program Info Block';
    icon: 'info';
  };
  attributes: {
    audience_description: Schema.Attribute.Text;
    audience_label: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Who Should Attend'>;
    date_label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Date'>;
    date_value: Schema.Attribute.String;
    time_label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Time'>;
    time_value: Schema.Attribute.String;
    venue_address: Schema.Attribute.String;
    venue_label: Schema.Attribute.String & Schema.Attribute.DefaultTo<'Venue'>;
    venue_name: Schema.Attribute.String;
  };
}

export interface WhatWeDoScheduleItem extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_schedule_items';
  info: {
    description: 'Single schedule row for weekly programs';
    displayName: 'WWD Schedule Item';
    icon: 'calendar';
  };
  attributes: {
    day_label: Schema.Attribute.String & Schema.Attribute.Required;
    tag: Schema.Attribute.String;
    time_range: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WhoWeAreOrgCard extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_org_cards';
  info: {
    description: 'Overview card for the club/organization';
    displayName: 'WWA Org Card';
    icon: 'building';
  };
  attributes: {
    founded_year: Schema.Attribute.Integer;
    highlights: Schema.Attribute.Component<'what-we-do.checklist-item', true>;
    location: Schema.Attribute.String;
    org_name: Schema.Attribute.String & Schema.Attribute.Required;
    summary: Schema.Attribute.RichText;
    tagline: Schema.Attribute.String;
  };
}

export interface WhoWeAreValueCard extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_value_cards';
  info: {
    description: 'Represents a core value with an icon, title, and description';
    displayName: 'Value Card';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupBigPartnerBlock extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_big_partner_blocks';
  info: {
    description: 'Large Business Improvement Group (BIG) section';
    displayName: 'Big Partner Block';
    icon: 'building';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    eyebrow_label: Schema.Attribute.String;
    footer_text: Schema.Attribute.Text;
    highlight_points: Schema.Attribute.Component<'global.rich-point', true>;
    partner_logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupColumnFeatureBlock extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_column_feature_blocks';
  info: {
    description: 'Single column in Food & Entertainment section';
    displayName: 'Column Feature Block';
    icon: 'column';
  };
  attributes: {
    bullet_points: Schema.Attribute.Component<'global.rich-point', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupEventHighlight extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_event_highlights';
  info: {
    description: 'Small highlight card for World Cup features';
    displayName: 'Event Highlight';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_faq_items';
  info: {
    description: 'Question and answer entry for FAQ';
    displayName: 'FAQ Item';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_hero_sections';
  info: {
    description: 'Hero banner for World Cup 2026 page';
    displayName: 'Hero Section';
    icon: 'trophy';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images'> &
      Schema.Attribute.Required;
    countdown_event_date: Schema.Attribute.DateTime;
    eyebrow_label: Schema.Attribute.String;
    overlay_opacity: Schema.Attribute.Decimal;
    primary_button_label: Schema.Attribute.String;
    primary_button_url: Schema.Attribute.String;
    secondary_button_label: Schema.Attribute.String;
    secondary_button_url: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    text_alignment: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupMatchCard extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_match_cards';
  info: {
    description: 'Single match schedule card';
    displayName: 'Match Card';
    icon: 'calendar';
  };
  attributes: {
    location_label: Schema.Attribute.String;
    match_date: Schema.Attribute.Date & Schema.Attribute.Required;
    match_time: Schema.Attribute.String & Schema.Attribute.Required;
    register_button_label: Schema.Attribute.String;
    register_button_url: Schema.Attribute.String;
    spots_available: Schema.Attribute.Integer;
    spots_label: Schema.Attribute.String;
    stage: Schema.Attribute.String;
    team_1_flag_emoji: Schema.Attribute.String;
    team_1_name: Schema.Attribute.String & Schema.Attribute.Required;
    team_2_flag_emoji: Schema.Attribute.String;
    team_2_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupRegisterPerkItem extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_register_perk_items';
  info: {
    description: 'Small perk card inside Register For Updates';
    displayName: 'Register Perk Item';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupRegisterUpdates extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_register_updates';
  info: {
    description: 'Register for Updates section';
    displayName: 'Register Updates';
    icon: 'email';
  };
  attributes: {
    cta_label: Schema.Attribute.String & Schema.Attribute.Required;
    cta_url: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    perks: Schema.Attribute.Component<'world-cup.register-perk-item', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    what_you_receive: Schema.Attribute.Component<'global.rich-point', true>;
  };
}

export interface WorldCupShowcaseCategory extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_showcase_categories';
  info: {
    description: 'Local Businesses / Residents / Organizations block';
    displayName: 'Showcase Category';
    icon: 'folder';
  };
  attributes: {
    bullet_points: Schema.Attribute.Component<'global.rich-point', true>;
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupShowcaseCtaGroup extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_showcase_cta_groups';
  info: {
    description: 'Centered CTA inviting people to showcase or perform';
    displayName: 'Showcase CTA Group';
    icon: 'cursor';
  };
  attributes: {
    cta_label: Schema.Attribute.String & Schema.Attribute.Required;
    cta_url: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupSurveyBlock extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_survey_blocks';
  info: {
    description: 'Community Needs Assessment Survey section';
    displayName: 'Survey Block';
    icon: 'question';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    eyebrow_label: Schema.Attribute.String;
    highlight_items: Schema.Attribute.Component<
      'world-cup.survey-highlight-item',
      true
    >;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupSurveyHighlightItem extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_survey_highlight_items';
  info: {
    description: 'Bullet highlight for survey block';
    displayName: 'Survey Highlight Item';
    icon: 'bulletList';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface WorldCupTwoColumnFeature extends Struct.ComponentSchema {
  collectionName: 'components_world_cup_two_column_features';
  info: {
    description: 'Section wrapper for two feature columns';
    displayName: 'Two Column Feature';
    icon: 'layout';
  };
  attributes: {
    columns: Schema.Attribute.Component<'world-cup.column-feature-block', true>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.button': GlobalButton;
      'global.contact-info-box': GlobalContactInfoBox;
      'global.hours': GlobalHours;
      'global.rich-point': GlobalRichPoint;
      'global.seo': GlobalSeo;
      'global.social-link': GlobalSocialLink;
      'what-we-do.checklist-item': WhatWeDoChecklistItem;
      'what-we-do.cta-block': WhatWeDoCtaBlock;
      'what-we-do.program-card': WhatWeDoProgramCard;
      'what-we-do.program-info-block': WhatWeDoProgramInfoBlock;
      'what-we-do.schedule-item': WhatWeDoScheduleItem;
      'who-we-are.org-card': WhoWeAreOrgCard;
      'who-we-are.value-card': WhoWeAreValueCard;
      'world-cup.big-partner-block': WorldCupBigPartnerBlock;
      'world-cup.column-feature-block': WorldCupColumnFeatureBlock;
      'world-cup.event-highlight': WorldCupEventHighlight;
      'world-cup.faq-item': WorldCupFaqItem;
      'world-cup.hero-section': WorldCupHeroSection;
      'world-cup.match-card': WorldCupMatchCard;
      'world-cup.register-perk-item': WorldCupRegisterPerkItem;
      'world-cup.register-updates': WorldCupRegisterUpdates;
      'world-cup.showcase-category': WorldCupShowcaseCategory;
      'world-cup.showcase-cta-group': WorldCupShowcaseCtaGroup;
      'world-cup.survey-block': WorldCupSurveyBlock;
      'world-cup.survey-highlight-item': WorldCupSurveyHighlightItem;
      'world-cup.two-column-feature': WorldCupTwoColumnFeature;
    }
  }
}
