import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.css'
})
export class GoalComponent {
  title = 'Goal';
  content = 'Our primary goal is to remove financial barriers to soccer participation by providing free playing opportunities and affordable access to tournaments. WHCFC strives to support Scarborough\'s community by organizing soccer tournaments, family-oriented events, and educational workshops aimed at personal and professional development. We also seek to build partnerships and secure sponsorships to sustain and grow our offerings, ultimately creating a lasting impact on the community through football and skill-building initiatives.';
  imageUrl = 'assets/Goals.jpg';
}
