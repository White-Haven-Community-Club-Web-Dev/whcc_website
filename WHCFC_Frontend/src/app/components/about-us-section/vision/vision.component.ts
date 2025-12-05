import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsDataService } from '../../../services/about-us-data.service';
import { CMSService } from '../../../services/cms.service';

@Component({
  selector: 'app-vision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent implements OnInit {
  title = 'Vision';
  content = 'WHCFC envisions becoming the first club in Scarborough to offer free football opportunities, providing residents with a space to connect, grow, and develop through the sport. Our vision is to foster community spirit, diversity, and inclusivity by promoting social connections and skill-building through football. We aim to create a welcoming environment that encourages participation from underrepresented groups, helping them succeed both on and off the field. Through our programs, we will cultivate a sense of togetherness and respect, empowering individuals to celebrate cultural differences and grow within a supportive community.';
  imageUrl = 'assets/Vision.jpg';

  constructor(
    private aboutUsDataService: AboutUsDataService,
    public cmsService: CMSService
  ) {}

  ngOnInit() {
    this.aboutUsDataService.aboutUsData$.subscribe(data => {
      if (data) {
        this.title = data.visionTitle || this.title;
        this.content = data.visionContent || this.content;
        if (data.visionImage) {
          this.imageUrl = this.cmsService.getImageUrl(data.visionImage);
        }
      }
    });
  }
}
