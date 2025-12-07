import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsDataService } from '../../../services/about-us-data.service';

@Component({
  selector: 'app-our-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-board.component.html',
  styleUrl: './our-board.component.css'
})
export class OurBoardComponent implements OnInit {
  title = 'Our Board';
  boardMembers = [
    { name: 'Joseph Fernandes', position: 'President', image: 'assets/Joe.jpg' },
    { name: 'Noel Miller', position: 'Director, Partnership Development', image: 'assets/Noel.jpg' },
    { name: 'Gurpurv Kukreja', position: 'Secretary', image: 'assets/Guru.jpg' },
    { name: 'Legus Yeung', position: 'Tech Advisor', image: 'assets/Legus.jpg' }
  ];

  constructor(private aboutUsDataService: AboutUsDataService) {}

  ngOnInit() {
    this.aboutUsDataService.aboutUsData$.subscribe(data => {
      if (data) {
        this.title = data.ourBoardTitle || this.title;
        if (data.boardMembers && data.boardMembers.length > 0) {
          this.boardMembers = data.boardMembers;
        }
      }
    });
  }
}
