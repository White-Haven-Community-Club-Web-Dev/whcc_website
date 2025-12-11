import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent {
  title = 'Testimonials';
  videos = ['assets/Henry.mp4', 'assets/Jay.mp4', 'assets/Debem.mp4'];
  currentVideoIndex = 0;

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