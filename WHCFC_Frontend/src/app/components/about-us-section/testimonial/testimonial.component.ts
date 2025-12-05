import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsDataService } from '../../../services/about-us-data.service';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  title = 'Testimonials';
  videos = ['assets/Henry.mp4', 'assets/Jay.mp4', 'assets/Debem.mp4'];
  currentVideoIndex = 0;

  constructor(private aboutUsDataService: AboutUsDataService) {}

  ngOnInit() {
    this.aboutUsDataService.aboutUsData$.subscribe(data => {
      if (data) {
        this.title = data.testimonialsTitle || this.title;
        if (data.testimonialVideos && data.testimonialVideos.length > 0) {
          this.videos = data.testimonialVideos;
        }
      }
    });
  }

  previousVideo() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
    } else {
      this.currentVideoIndex = this.videos.length - 1;
    }
  }

  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    } else {
      this.currentVideoIndex = 0;
    }
  }

  get currentVideo() {
    return this.videos[this.currentVideoIndex];
  }
}