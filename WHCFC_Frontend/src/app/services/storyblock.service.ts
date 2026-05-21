import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../environments/environment';

export interface StoryblokResponse {
  story: {
    name: string;
    id: number;
    uuid: string;
    slug: string;
    content: {
      component: string;
      body: any[];
      [key: string]: any;
    };
  };
}

@Injectable({
  providedIn: 'root' // Makes the service globally accessible
})
export class StoryblokService {
  private http = inject(HttpClient);

  // Base endpoint for Storyblok's Content Delivery API v2
  private readonly baseUrl = 'https://api.storyblok.com/v2/cdn/stories';

  /**
   * Fetches a single story layout by its slug path
   * @param slug - The page slug (e.g., 'home' or 'news/announcement')
   * @param version - 'draft' for preview editing, 'published' for public production
   */
  getStory(slug: string): Observable<StoryblokResponse['story']> {
    const token = environment.sbKey;
    const url = `${this.baseUrl}/${slug}?version=${environment.sbVersion}&token=${token}`;      
    return this.http.get<StoryblokResponse>(url).pipe(
      // Map the response directly to the 'story' node to keep component code clean
      map(response => response.story)
    );
  }
}