import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Events } from '../../types';
@Injectable({
  providedIn: 'root'
})
export class CMSService {
  private apiUrl = environment.apiUrl || '';
  private strapiUrl = environment.strapiUrl || 'http://localhost:1337';
  isEditMode = false;

  constructor(private http: HttpClient) {}

  getImageUrl(imagePath: string): string {
    if (!imagePath) {
      return '';
    }
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
      return imagePath;
    }
    // If it's a relative path starting with assets, return as is
    if (imagePath.startsWith('assets/')) {
      return imagePath;
    }
    // Otherwise, prepend the API URL
    return `${this.apiUrl}/${imagePath}`;
  }

  getEvents(): Observable<Events[]> {
  return this.http
    .get<any>(
      `${this.strapiUrl}/api/events?filters[is_published][$eq]=true&sort=date:asc`
    )
    .pipe(
      map((res) =>
        res.data.map((e: any) => ({
          title:       e.title,
          date:        e.date,
          time:        e.time        ?? 'T00:00:00',
          category:    e.category    ?? '',
          description: e.description ?? '',
          location:    e.location    ?? '',
          team1:       e.team1       ?? '',
          team2:       e.team2       ?? '',
        }))
      ),
      catchError(() => of([]))
    );
}

  getEventsByDate(date: string): Observable<Events[]> {
  return this.http
    .get<any>(
      `${this.strapiUrl}/api/events?filters[date][$eq]=${date}&filters[is_published][$eq]=true`
    )
    .pipe(
      map((res) =>
        res.data.map((e: any) => ({
          title:       e.title,
          date:        e.date,
          time:        e.time        ?? 'T00:00:00',
          category:    e.category    ?? '',
          description: e.description ?? '',
          location:    e.location    ?? '',
          team1:       e.team1       ?? '',
          team2:       e.team2       ?? '',
        }))
      ),
      catchError(() => of([]))
    );
}

  getAboutUsContent(): Observable<any> {
    // Return default content if no API is configured
    return of({
      aboutUsTitle: 'About Us',
      aboutUsContent: 'White Haven Community Football Club (WHCFC) is a non-profit organization based in Scarborough.',
      missionTitle: 'Our Mission',
      missionContent: 'To provide free football experiences to the community.',
      visionTitle: 'Our Vision',
      visionContent: 'Building an inclusive community through football.',
      goalTitle: 'Our Goals',
      goalContent: 'Foster teamwork, skill development, and community engagement.'
    });
  }

  getAboutUsPage(): Observable<any> {
    return this.getAboutUsContent();
  }
}



