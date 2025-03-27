import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SchemaService } from './services/schema.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private schemaService: SchemaService) {}

  ngOnInit() {
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "White Haven Community Football Club",
      "description": "A not-for-profit football club located in White Haven Park, offering free football experiences, team play and tournaments, community networking, and free education workshops.",
      "url": "https://whcfc.ca",
      "location": {
        "@type": "Place",
        "name": "White Haven Park",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "63 Invergordon Ave",
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
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);
  }
  title = 'White Haven Community Football Club';
}
