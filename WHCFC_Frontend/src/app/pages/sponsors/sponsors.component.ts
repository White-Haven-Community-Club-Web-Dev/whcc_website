import { Component, OnInit } from '@angular/core';
import { SponsorHighlightComponent } from '../../components/sponsor-highlight/sponsor-highlight.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [ SponsorHighlightComponent ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})

export class SponsorsComponent implements OnInit{
  
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Sponsors | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: "Discover sponsorship opportunities with White Haven Community Football Club and support community development through football." },
      { name: 'keywords', content: 'sponsorship, community support, football club, partnership, sponsor benefits, community development' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}