import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { AboutUsSectionComponent } from '../../components/about-us-section/about-us-section.component';
import { MissionComponent } from '../../components/about-us-section/mission/mission.component';
import { VisionComponent } from '../../components/about-us-section/vision/vision.component';
import { GoalComponent } from '../../components/about-us-section/goal/goal.component';
import { OurBoardComponent } from '../../components/about-us-section/our-board/our-board.component';
import { WhereWePlayComponent } from '../../components/about-us-section/where-we-play/where-we-play.component';
import { TestimonialComponent } from '../../components/about-us-section/testimonial/testimonial.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  standalone: true,
  imports: [
    AboutUsSectionComponent,
    MissionComponent,
    VisionComponent,
    GoalComponent,
    OurBoardComponent,
    WhereWePlayComponent,
    TestimonialComponent
  ]
})
export class AboutUsComponent implements OnInit{
  
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('About Us | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: "Learn more about White Haven Community Football Club's mission, vision, goal and board members" },
      { name: 'keywords', content: 'about us, company, team, mission, vision, goal' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}