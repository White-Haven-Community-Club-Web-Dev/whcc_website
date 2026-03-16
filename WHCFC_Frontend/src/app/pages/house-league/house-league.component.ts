import { Component } from '@angular/core';
import { HouseLeagueComponent } from '../../components/what-we-do-section/house-league/house-league.component';

@Component({
  selector: 'app-house-league-page',
  standalone: true,
  imports: [HouseLeagueComponent],
  template: `<app-house-league></app-house-league>`,
})
export class HouseLeaguePageComponent {}
