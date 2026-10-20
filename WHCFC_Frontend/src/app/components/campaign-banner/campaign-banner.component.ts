
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { DatePipe } from '@angular/common';

interface StoryblokLink {
  id?: string;
  url?: string;
  cached_url?: string;
  linktype?: string;
}

export interface CampaignBannerData {
  image?: {
    filename: string;
    alt?: string;
  };
  tag?: string;
  titleHighlighted?: string;
  title?: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  category?: string;
  buttonText?: string;
  buttonLink?: StoryblokLink;
}

@Component({
  selector: 'campaign-banner',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './campaign-banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignBannerComponent {
  blok = input<CampaignBannerData>();

  bannerUrl = computed(() => {
    const link = this.blok()?.buttonLink;

    if (!link) return '';

    if (link.linktype === 'story') {
      const slug = link.cached_url || '';

      if (!slug) return '';

      return '/' + slug.replace(/^\/+/, '');
    }

    return link.url || link.cached_url || '';
  });

  isExternalLink = computed(() => {
    const link = this.blok()?.buttonLink;

    return link?.linktype === 'url';
  });
}
