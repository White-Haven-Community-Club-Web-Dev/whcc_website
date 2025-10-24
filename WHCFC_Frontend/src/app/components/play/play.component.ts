import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})
export class PlayComponent implements OnInit{

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('F4 Program | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: "Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop ,It's White Haven Community Football Club's value preposition to offer Free, Fun, Fitness, Football opportunities! That's what differenciates us from others!" },
      { name: 'keywords', content: 'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, team, mission, Free, Fun, Fitness, Football' },
      { name: 'author', content: 'White Haven Community Football Club - Building a Stronger Soccer Community' }
    ]);
  }

}
