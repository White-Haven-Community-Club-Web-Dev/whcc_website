import { Component } from '@angular/core';
import { EducationalSessionComponent } from '../../components/what-we-do-section/educational-session/educational-session.component';

@Component({
  selector: 'app-educational-session-page',
  standalone: true,
  imports: [EducationalSessionComponent],
  template: `<app-educational-session></app-educational-session>`,
})
export class EducationalSessionPageComponent {}
