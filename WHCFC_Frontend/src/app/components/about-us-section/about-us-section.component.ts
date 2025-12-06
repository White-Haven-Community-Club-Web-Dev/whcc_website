import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us-section.component.html',
  styleUrl: './about-us-section.component.css'
})
export class AboutUsSectionComponent {
  title = 'About Us';
  content = 'White Haven Community Football Club (WHCFC) is a non-profit organization based in Scarborough, dedicated to providing free football (soccer) experiences to the community. We focus on creating opportunities for individuals from diverse backgrounds, offering a space for social interaction, teamwork, and personal development. Through football, we aim to foster inclusivity and build a sense of belonging while promoting skill-building both on and off the field. Our community-based approach emphasizes not only physical activity but also the growth of professional and life skills through free educational workshops.';
  imageUrl = 'assets/community_football.jpg';
}
