import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-f4-program',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './f4-program.component.html',
  styleUrl: './f4-program.component.css'
})
export class F4ProgramComponent implements OnInit {
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('F4 Outdoor Program 2026 | White Haven Community Football Club');
  }
}
