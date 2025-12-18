import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css'
})
export class WhoWeAreComponent implements OnInit {

  constructor(
    private titleService: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Who We Are | White Haven Community Football Club");
    this.meta.addTags([
      { name: 'description', content: "Learn about White Haven Community Football Club (WHCFC), a non-profit organization in Scarborough dedicated to providing fun, safe, and inclusive soccer opportunities for all ages and skill levels. Discover our mission, vision, goals, and meet our board members." },
      { name: 'keywords', content: 'WHCFC, White Haven Community Football Club, about us, who we are, mission, vision, goals, Scarborough soccer, non-profit soccer club, community football, our board, team members' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
