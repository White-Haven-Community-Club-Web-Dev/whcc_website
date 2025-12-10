import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CMSService {
  private apiUrl = environment.apiUrl || '';
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



