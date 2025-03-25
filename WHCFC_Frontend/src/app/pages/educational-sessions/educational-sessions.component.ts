import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-educational-sessions',
  standalone: true,
  imports: [],
  templateUrl: './educational-sessions.component.html',
  styleUrl: './educational-sessions.component.css'
})
export class EducationalSessionsComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Educational Sessions | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Free educational sessions at White Haven Community Football Club. Learn project management, mental health awareness, computer programming, and financial management skills.' },
      { name: 'keywords', content: 'educational sessions, free education, project management, mental health, computer programming, financial management, community learning' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
