import { Component } from '@angular/core';
import { WhatWeDoSectionComponent } from '../../components/what-we-do-section/what-we-do-section.component';
import { WorldCupPosterComponent } from '../../components/what-we-do-section/world-cup-poster/world-cup-poster.component';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [
    WhatWeDoSectionComponent,
    WorldCupPosterComponent,
  ],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {

}
