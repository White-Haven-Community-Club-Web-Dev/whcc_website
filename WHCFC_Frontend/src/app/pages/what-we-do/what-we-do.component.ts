import { Component } from '@angular/core';
import { WhatWeDoSectionComponent } from '../../components/what-we-do-section/what-we-do-section.component';
import { WorldCupPosterComponent } from '../../components/what-we-do-section/world-cup-poster/world-cup-poster.component';
import { EducationalSessionComponent } from '../../components/what-we-do-section/educational-session/educational-session.component';
import { HouseLeagueComponent } from '../../components/what-we-do-section/house-league/house-league.component';
import { F3ProgramComponent } from '../../components/what-we-do-section/f3-program/f3-program.component';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [
    WhatWeDoSectionComponent, 
    WorldCupPosterComponent,
    EducationalSessionComponent,
    HouseLeagueComponent,
    F3ProgramComponent
  ],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

}
