import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProjectLanding } from '../../types';

// Service to fetch Project Landing data from Strapi CMS
@Injectable({ providedIn: 'root' })
export class ProjectLandingService {
  private http = inject(HttpClient);
  private base = environment.strapiUrl;

  // Fetch a Project Landing by its slug
  getBySlug(slug: string): Observable<ProjectLanding | null> {
    console.log('ProjectLandingService: getBySlug called with slug:', slug);
    const params = new HttpParams()
      .set('filters[slug][$eq]', slug)
      .set('populate[seo]', 'true')
      .set('populate[heroImage]', 'true')
      .set('populate[events]', 'true')
    return this.http
      .get<any>(`${this.base}/project-landings`, { params })
      .pipe(
        map((res) => {
          if (!res?.meta?.pagination?.total) return null;

          const item = res.data[0];
          
          console.log('Raw Project Landing data from Strapi:', item);
          
          return {
            id: item.id,
            documentId: item.documentId,
            title: item.title,
            description: item.description,
            slug: item.slug,
            seo: item.seo,
            heroImage: item.heroImage,
            // events is already an array of plain objects
            events: item.events?.map((ev: any) => ({
              id: ev.id,
              title: ev.title,
              slug: ev.slug,
              start_date: ev.start_date,
              end_date: ev.end_date,
              max_people: ev.max_people,
              description: ev.description,
            })),
          } as ProjectLanding;
        })
      );
  }

  // Fetch a Project Landing by its ID
  getbyId(id: string): Observable<ProjectLanding | null> {
    const params = new HttpParams()
      .set('filters[id][$eq]', id)
      .set('populate', 'title,description,seo,heroImage,events,events.image');

    return this.http
      .get<any>(`${this.base}/project-landings/${id}`, { params })
      .pipe(
        map((res) => {
          if (!res?.data) return null;
          const item = res.data;
          return {
            id: item.id,
            ...item.attributes,
            events: item.attributes.events?.data?.map((ev: any) => ({
              id: ev.id,
              ...ev.attributes,
            })),
          } as ProjectLanding;
        })
      );
  }
}
