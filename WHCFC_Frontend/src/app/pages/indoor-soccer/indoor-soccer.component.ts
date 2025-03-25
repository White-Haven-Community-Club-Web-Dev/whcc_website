import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-indoor-soccer',
  standalone: true,
  imports: [],
  templateUrl: './indoor-soccer.component.html',
  styleUrl: './indoor-soccer.component.css'
})
export class IndoorSoccerComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Indoor Soccer Program | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Join WHCFC Indoor Football Program Spring Season at Joseph Brant Public School. Affordable indoor soccer program for youth and adults with subsidized rates.' },
      { name: 'keywords', content: 'indoor soccer, indoor football, Scarborough soccer, youth soccer, adult soccer, affordable soccer, winter futsal, spring season' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
