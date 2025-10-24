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
      { name: 'description', content: 'Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop.' },
      { name: 'keywords', content: 'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club' },
      { name: 'author', content: 'White Haven Community Football Club - Building a Stronger Soccer Community' }
    ]);
  }
}
