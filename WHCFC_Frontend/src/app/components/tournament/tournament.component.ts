import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [],
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
})
export class TournamentComponent implements OnInit, AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef<HTMLDivElement>;

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.setSEO();
  }

  ngAfterViewInit(): void {
    this.setupCarousel();
  }

  private setSEO(): void {
    this.title.setTitle(
      'Tournaments | White Haven Community Football Club, Scarborough Soccer Tournament 2025 – June 28-29 | Register Now!"'
    );
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop ,Tournament Opportunities with WHCFC',
      },
      {
        name: 'keywords',
        content:
          'football, soccer,futsal,community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer,Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, soccer tournament, football tournament, 2025 soccer tournament GTA soccer tournament, weekend sports event, soccer match schedule, amateur soccer league',
      },
      {
        name: 'author',
        content:
          'White Haven Community Football Club - Building a Stronger Soccer Community',
      },
    ]);
  }

  private setupCarousel(): void {
    const prevButton = document.querySelector('.carousel-control-prev');
    const nextButton = document.querySelector('.carousel-control-next');

    prevButton?.addEventListener('click', () => {
      this.carousel.nativeElement.scrollBy({
        left: -this.carousel.nativeElement.offsetWidth,
        behavior: 'smooth',
      });
    });

    nextButton?.addEventListener('click', () => {
      this.carousel.nativeElement.scrollBy({
        left: this.carousel.nativeElement.offsetWidth,
        behavior: 'smooth',
      });
    });
  }
}
