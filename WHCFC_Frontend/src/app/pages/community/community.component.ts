import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FirstSectionComponent } from '../../components/community/first-section/first-section.component';
import { SecondSectionComponent } from '../../components/community/second-section/second-section.component';
import { ThirdSectionComponent } from '../../components/community/third-section/third-section.component';
import { FourthSectionComponent } from '../../components/community/fourth-section/fourth-section.component';
import { FifthSectionComponent } from '../../components/community/fifth-section/fifth-section.component';

@Component({
  selector: 'app-community',
  standalone: true,
  imports: [
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FifthSectionComponent,
  ],
  templateUrl: './community.component.html',
  styleUrl: './community.component.css',
})
export class CommunityComponent implements OnInit{

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Community | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'White Heaven Community Football Club is more than just building a club, we are building a community.' },
      { name: 'keywords', content: 'community, company, team, mission' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
