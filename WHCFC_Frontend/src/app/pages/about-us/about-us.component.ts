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
  
  constructor(
    private meta: Meta, 
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle('About Us | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: "Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop, Learn more about White Haven Community Football Club's mission, vision, goal and board members" },
      { name: 'keywords', content: 'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, about us, mission, vision, goal' },
      { name: 'author', content: 'White Haven Community Football Club - Building a Stronger Soccer Community' }
    ]);
  }
}