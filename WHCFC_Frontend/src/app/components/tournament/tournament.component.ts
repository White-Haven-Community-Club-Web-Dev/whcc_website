import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.css'
})
export class TournamentComponent implements OnInit{
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Tournaments | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Tournament Opportunities with WHCFC' },
      { name: 'keywords', content: 'Tournament Opportunities, company, team, mission, football, soccer, scarborough football, scarborough soccer' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
