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
      { name: 'description', content: "Learn more about White Haven Community Football Club's youth program" },
      { name: 'keywords', content: 'youth program, company, team, mission, vision, goal' },
      { name: 'author', content: 'White Haven Community Football Club' }
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
