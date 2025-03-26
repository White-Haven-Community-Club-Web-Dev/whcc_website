import { Component, OnInit, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-youth-program',
  templateUrl: './youth-program.component.html',
  styleUrls: ['./youth-program.component.css']
})
export class YouthProgramComponent implements OnInit, OnDestroy {
  days: string = '00';
  hours: string = '00';
  minutes: string = '00';
  seconds: string = '00';
  private countdownInterval: any;

  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.startCountdown();
    this.title.setTitle('Youth Program | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: "Welcome to the White Haven Community Football Club official website. We are an established not-for-profit football club located in, White Haven Park 63 Invergordon Ave Scarborough, ON, that offers free football experiences, team play and tournaments, community and networking, and free education workshop, Learn more about White Haven Community Football Club's youth program ,Stay active this winter! Join our Subsidized Winter Futsal Program in Scarborough for skill-building, fun, and fitness. Open to all levels" },
      { name: 'keywords', content: 'football, soccer,futsal, community, club, sports, Scarborough soccer, Scarborough football club, Scarborough soccer club, Scarborough White Haven soccer, Scarborough White Haven football, not-for-profit club, Scarborough youth soccer, Scarborough adult soccer, Scarborough kids soccer, local football club, GTA football, local football club, youth program, company, team, mission, vision, goal' },
      { name: 'author', content: 'White Haven Community Football Club - Building a Stronger Soccer Community' }
    ]);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown() {
    let dest = new Date("March 19, 2025 00:00:00").getTime();

    this.countdownInterval = setInterval(() => {
      let now = new Date().getTime();
      let diff = dest - now;

      if (diff <= 0) {
        clearInterval(this.countdownInterval);
        this.days = '00';
        this.hours = '00';
        this.minutes = '00';
        this.seconds = '00';
        return;
      }

      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((diff % (1000 * 60)) / 1000);

      // Format numbers to always have two digits
      this.days = days < 10 ? `0${days}` : `${days}`;
      this.hours = hours < 10 ? `0${hours}` : `${hours}`;
      this.minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      this.seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    }, 1000);
  }
}
