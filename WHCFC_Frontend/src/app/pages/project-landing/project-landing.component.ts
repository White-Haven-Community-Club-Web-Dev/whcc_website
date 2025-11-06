import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  ProjectLandingService,
} from '../../services/project-landing.service';
import { ProjectLanding } from '../../../types';
import { Title, Meta } from '@angular/platform-browser';

/** Project Landing Component to display project details based on slug from route **/
@Component({
  selector: 'app-project-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-landing.component.html',
  styleUrl: './project-landing.component.css'
})

// ProjectLandingComponent class definition
export class ProjectLandingComponent {
  private route = inject(ActivatedRoute);
  private service = inject(ProjectLandingService);
  private title= inject(Title);
  private meta = inject(Meta);

  project: ProjectLanding | null = null;
  loading = true;

  // On component initialization, fetch project landing data based on slug
  ngOnInit(): void {
    // Get slug and id from route parameters
    const slug = this.route.snapshot.paramMap.get('slug');
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route slug:', slug);
    // If slug or id is missing, stop loading
    if (!slug) {
      this.loading = false;
      return;
    }

    // Fetch project landing data using the service
    this.service.getBySlug(slug).subscribe({
        next: (project) => {
          console.log('Fetched project landing:', project);
          this.project = project;
          this.loading = false;

          if (project?.seo){
            this.applySeo(project.seo);
          }else if (project?.title){
            this.title.setTitle(project.title);
          }
        },
        error: (err) => {
          console.error('Error fetching project landing by slug:', err);
          this.loading = false;
        },
    });
  }

  private applySeo(seo: any): void {
    if (seo.metaTitle) {
      this.title.setTitle(seo.metaTitle);
      this.meta.updateTag({ property: 'og:title', content: seo.metaTitle });
    }
    if (seo.metaDescription) {
      this.meta.updateTag({ name: 'description', content: seo.metaDescription });
      this.meta.updateTag({
        property: 'og:description',
        content: seo.metaDescription,
      });
    }
    if (seo.canonicalURL) {
      let link: HTMLLinkElement | null = document.querySelector(
        "link[rel='canonical']"
      );
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', seo.canonicalURL);
    }
    if (seo.ogImage?.url) {
      this.meta.updateTag({ property: 'og:image', content: seo.ogImage.url });
    }
  }
}
