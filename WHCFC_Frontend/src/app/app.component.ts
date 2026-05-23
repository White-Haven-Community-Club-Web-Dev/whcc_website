import { Component, inject, PLATFORM_ID } from '@angular/core';
import { SchemaService } from './services/schema.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <button (click)="test()" >Hello</button>
  `,
})
export class AppComponent {
  private readonly schemaService = inject(SchemaService);
  private readonly platformId = inject(PLATFORM_ID);

  test(){
    console.log("test")
  }

  ngOnInit() {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "White Haven Community Football Club",
      "description": "A not-for-profit football club located in Scarborough, offering free football experiences, team play and tournaments, community networking, and free education workshops.",
      "url": "https://whcfc.ca",
      "location": {
        "@type": "Place",
        "name": "Scarborough",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Scarborough",
          "addressRegion": "ON",
          "addressCountry": "CA"
        }
      },
      "nonprofitStatus": "NonprofitType",
      "keywords": [
        "football",
        "soccer",
        "futsal",
        "community",
        "club",
        "sports",
        "Scarborough soccer",
        "Scarborough football club",
        "not-for-profit club",
        "local football club",
        "GTA football"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Free Football Experiences",
          "description": "Wednesday and Sunday scrimmages at no cost and no obligation"
        },
        {
          "@type": "Offer",
          "name": "Team Play and Tournaments",
          "description": "Competitive football opportunities without financial burden"
        },
        {
          "@type": "Offer",
          "name": "Educational Workshops",
          "description": "Free workshops focused on developing life skills, career growth, and personal development"
        }
      ]
    };

    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(organizationSchema);
      document.head.appendChild(script);
    }
  }
}
