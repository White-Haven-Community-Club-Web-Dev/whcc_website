import { Component } from '@angular/core';
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
export class CommunityComponent {}
