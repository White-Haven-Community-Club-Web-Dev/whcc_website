import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AboutUsData {
  aboutUsTitle?: string;
  aboutUsContent?: string;
  aboutUsImage?: string;
  missionTitle?: string;
  missionContent?: string;
  missionImage?: string;
  visionTitle?: string;
  visionContent?: string;
  visionImage?: string;
  goalTitle?: string;
  goalContent?: string;
  goalImage?: string;
  whereWePlayTitle?: string;
  whereWePlayContent?: string;
  whereWePlayImage?: string;
  whereWePlayMapUrl?: string;
  ourBoardTitle?: string;
  boardMembers?: any[];
  testimonials?: any[];
  testimonialsTitle?: string;
  testimonialVideos?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class AboutUsDataService {
  private aboutUsDataSubject = new BehaviorSubject<AboutUsData | null>(null);
  aboutUsData$ = this.aboutUsDataSubject.asObservable();

  setAboutUsData(data: AboutUsData): void {
    this.aboutUsDataSubject.next(data);
  }

  getAboutUsData(): AboutUsData | null {
    return this.aboutUsDataSubject.getValue();
  }
}



