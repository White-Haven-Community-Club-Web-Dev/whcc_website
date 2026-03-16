import { Component } from '@angular/core';
import { F3ProgramComponent } from '../../components/what-we-do-section/f3-program/f3-program.component';

@Component({
  selector: 'app-f3-program-page',
  standalone: true,
  imports: [F3ProgramComponent],
  template: `<app-f3-program></app-f3-program>`,
})
export class F3ProgramPageComponent {}
