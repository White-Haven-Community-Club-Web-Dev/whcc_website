import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsDataService } from '../../../services/about-us-data.service';
import { CMSService } from '../../../services/cms.service';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.css'
})
export class MissionComponent implements OnInit {
  title = 'Mission';
  content = "WHCFC's mission is to create a supportive environment where individuals, families, and businesses can build lasting connections through football. By organizing 3-5 tournaments per year starting in 2025, we aim to promote socialization, community engagement, and the development of life skills. In addition to soccer events, WHCFC offers educational workshops on essential skills like project management, mental and physical health, and conflict resolution—all at no cost to participants. Our mission is to serve equity-deserving and underrepresented groups, helping them overcome barriers and achieve personal and professional growth.";
  imageUrl = 'assets/Mission.jpg';

  constructor(
    private aboutUsDataService: AboutUsDataService,
    public cmsService: CMSService
  ) {}

  ngOnInit() {
    this.aboutUsDataService.aboutUsData$.subscribe(data => {
      if (data) {
        this.title = data.missionTitle || this.title;
        this.content = data.missionContent || this.content;
        if (data.missionImage) {
          this.imageUrl = this.cmsService.getImageUrl(data.missionImage);
        }
      }
    });
  }
}
