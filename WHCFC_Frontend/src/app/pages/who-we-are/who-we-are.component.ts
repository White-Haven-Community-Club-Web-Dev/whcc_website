import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DomSanitizer,
  Meta,
  SafeResourceUrl,
  Title
} from '@angular/platform-browser';

interface NarrativeSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  bgClass: string;
  reverseOnDesktop: boolean;
}

interface BoardMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.css'
})
export class WhoWeAreComponent implements OnInit {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Who We Are | White Haven Community Football Club');

    this.meta.updateTag({
      name: 'description',
      content:
        'Learn about White Haven Community Football Club (WHCFC), a non-profit organization in Scarborough dedicated to providing fun, safe, and inclusive soccer opportunities for all ages and skill levels. Discover our mission, vision, goals, and meet our board members.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'WHCFC, White Haven Community Football Club, about us, who we are, mission, vision, goals, Scarborough soccer, non-profit soccer club, community football, our board, team members'
    });
    this.meta.updateTag({ name: 'author', content: 'White Haven Community Football Club' });

    this.currentVideo = this.videos[this.currentVideoIndex];

    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.content.whereWePlay.map.embedSrc
    );
  }

  content = {
    hero: {
      eyebrow: 'White Haven Community Football Club',
      titleHighlight: 'Who',
      titleRest: ' We Are',
      subtitle: 'Building a Stronger, More Inclusive Community',
      image: 'Hero.png',
      imageAlt: 'Community playing soccer'
    },

    sections: <NarrativeSection[]>[
      {
        id: 'about',
        eyebrow: 'About',
        title: 'About Us',
        paragraphs: [
          'White Haven Community Football Club (WHCFC) is a non-profit organization based in Scarborough, dedicated to providing free football (soccer) experiences to the community.',
          'We focus on creating opportunities for individuals from diverse backgrounds, offering a space for social interaction, teamwork, and personal development.',
          'Through football, we aim to foster inclusivity and build a sense of belonging while promoting skill-building both on and off the field. Our community-based approach emphasizes not only physical activity but also the growth of professional and life skills through free educational workshops.'
        ],
        image: 'assets/pic1.jpg',
        imageAlt: 'WHCFC Team',
        bgClass: 'bg-white',
        reverseOnDesktop: false
      },
      {
        id: 'mission',
        eyebrow: 'Purpose',
        title: 'Mission',
        paragraphs: [
          "WHCFC's mission is to create a supportive environment where individuals, families, and businesses can build lasting connections through football.",
          'By organizing 3-5 tournaments per year starting in 2025, we aim to promote socialization, community engagement, and the development of life skills.',
          'In addition to soccer events, WHCFC offers educational workshops on essential skills like project management, mental and physical health, and conflict resolution—all at no cost to participants. Our mission is to serve equity-deserving and underrepresented groups, helping them overcome barriers and achieve personal and professional growth.'
        ],
        image: 'assets/pic2.jpg',
        imageAlt: 'Community Soccer',
        bgClass: 'bg-slate-50',
        reverseOnDesktop: true
      },
      {
        id: 'vision',
        eyebrow: 'Future',
        title: 'Vision',
        paragraphs: [
          'WHCFC envisions becoming the first club in Scarborough to offer free football opportunities, providing residents with a space to connect, grow, and develop through the sport.',
          'Our vision is to foster community spirit, diversity, and inclusivity by promoting social connections and skill-building through football.',
          'We aim to create a welcoming environment that encourages participation from underrepresented groups, helping them succeed both on and off the field. Through our programs, we will cultivate a sense of togetherness and respect, empowering individuals to celebrate cultural differences and grow within a supportive community.'
        ],
        image: 'assets/pic3.jpg',
        imageAlt: 'Soccer Celebration',
        bgClass: 'bg-white',
        reverseOnDesktop: false
      },
      {
        id: 'goal',
        eyebrow: 'Commitment',
        title: 'Goal',
        paragraphs: [
          'Our primary goal is to remove financial barriers to soccer participation by providing free playing opportunities and affordable access to tournaments.',
          "WHCFC strives to support Scarborough's community by organizing soccer tournaments, family-oriented events, and educational workshops aimed at personal and professional development.",
          'We also seek to build partnerships and secure sponsorships to sustain and grow our offerings, ultimately creating a lasting impact on the community through football and skill-building initiatives.'
        ],
        image: 'assets/pic4.jpg',
        imageAlt: 'Soccer Goal',
        bgClass: 'bg-slate-50',
        reverseOnDesktop: true
      }
    ],

    board: {
      title: 'Our Board',
      underlineClass: 'bg-[#e02020]',
      members: <BoardMember[]>[
        { name: 'Joseph Fernandes', role: 'President', image: 'assets/Joe.jpg' },
        { name: 'Noel Miller', role: 'Director, Partnership Development', image: 'assets/Noel.jpg' },
        { name: 'Gurpurv Kukreja', role: 'Secretary', image: 'assets/Guru.jpg' }
      ]
    },

    whereWePlay: {
      eyebrow: 'Location',
      title: 'Where We Play',
      description:
        'We are primarily based at White Haven Park in Scarborough, where we host most of our regular programs and events.',
      map: {
        title: 'White Haven Park Map',
        embedSrc:
          'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5760.711122694048!2d-79.25227112346384!3d43.786234543815866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d10374000001%3A0x62f484e422dd9fcc!2sWhite%20Haven%20Park!5e0!3m2!1sen!2sca!4v1727566759985!5m2!1sen!2sca'
      },
      locationCard: {
        iconSrc: 'assets/Location Card Icon.svg',
        iconAlt: 'Location icon',
        placeName: 'White Haven Park',
        addressLines: ['63 Invergordon Ave', 'Scarborough, ON M1K 3M6']
      },
      activitiesCardTitle: 'Regular Activities',
      regularActivities: [
        'Weekly pickup games and training sessions',
        'Youth development programs',
        'Community tournaments and events',
        'World Cup watch parties and celebrations'
      ]
    },

    testimonials: {
      title: 'Testimonials',
      prevAriaLabel: 'Previous testimonial',
      nextAriaLabel: 'Next testimonial',
      prevSymbol: '◀',
      nextSymbol: '▶',
      videoFallbackText: 'Your browser does not support the video tag.',
      counterSeparator: ' / '
    }
  };

  videos: string[] = ['assets/Henry.mp4', 'assets/Jay.mp4', 'assets/Debem.mp4'];
  currentVideoIndex = 0;
  currentVideo = this.videos[0];
  mapEmbedUrl!: SafeResourceUrl;

  private syncCurrentVideo(): void {
    this.currentVideo = this.videos[this.currentVideoIndex];
  }

  previousVideo(): void {
    this.currentVideoIndex =
      this.currentVideoIndex > 0 ? this.currentVideoIndex - 1 : this.videos.length - 1;
    this.syncCurrentVideo();
  }

  nextVideo(): void {
    this.currentVideoIndex =
      this.currentVideoIndex < this.videos.length - 1 ? this.currentVideoIndex + 1 : 0;
    this.syncCurrentVideo();
  }
}