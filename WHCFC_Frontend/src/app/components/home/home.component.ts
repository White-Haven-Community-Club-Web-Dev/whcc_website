import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixing styleUrl to styleUrls
})
export class HomeComponent implements OnInit, OnDestroy {
  
  benefits = [
    {
      icon: '⚽', 
      title: 'Free Football Experiences',
      description: 'Attend our Wednesday and Sunday scrimmages at no cost and no obligation. Participate in team play and summer tournaments with no cost.'
    },
    {
      icon: '🏆', 
      title: 'Team Play and Tournaments',
      description: 'Enjoy competitive football opportunities without the financial burden. Join a team with minimal uniform costs and benefit from our efforts to keep expenses low.'
    },
    {
      icon: '🌟', 
      title: 'Community and Networking',
      description: 'Interact with like-minded individuals, develop long-term relationships, and be part of a supportive community. Build connections that enhance both personal and professional growth.'
    },
    {
      icon: '📚', 
      title: 'Educational Workshops',
      description: 'Join free workshops focused on developing life skills, career growth, and personal development. Enhance your skills and knowledge to support your future endeavors.'
    }
  ];

  activeSlide = 0; // Track the current slide
  slideInterval: ReturnType<typeof setInterval> | undefined; // Hold the interval reference

  constructor(private cdr: ChangeDetectorRef) {} // Inject ChangeDetectorRef

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 10000); 
    }
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  goToSlide(slideIndex: number) {
    this.activeSlide = slideIndex;
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }

  // Automatically move to the next slide
  nextSlide() {
    this.activeSlide = (this.activeSlide + 1) % 2; // Alternates between 0 and 1 for two slides
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }

  // Move to the previous slide
  prevSlide() {
    this.activeSlide = (this.activeSlide - 1 + 2) % 2; // Cycles back to the last slide if at the beginning
    this.cdr.detectChanges(); // Manually trigger change detection to update UI
  }
}
