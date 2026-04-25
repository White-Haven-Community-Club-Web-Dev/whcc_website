import { Component } from '@angular/core';
import { F4ProgramComponent } from '../../components/what-we-do-section/f4-program/f4-program.component';

@Component({
  selector: 'app-f4-program-page',
  standalone: true,
  imports: [F4ProgramComponent],
  template: `<app-f4-program></app-f4-program>`,
})
export class F4ProgramPageComponent {}
