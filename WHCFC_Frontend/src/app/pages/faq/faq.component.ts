import { Component, OnInit } from '@angular/core';
import { FaqHeadingComponent } from '../../components/faq/faq-heading/faq-heading.component';
import { FaqCoreComponent } from '../../components/faq/faq-core/faq-core.component';
import { FaqMissComponent } from '../../components/faq/faq-miss/faq-miss.component';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FaqHeadingComponent, FaqCoreComponent, FaqMissComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  constructor(private meta: Meta, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('FAQ | White Haven Community Football Club');
    this.meta.addTags([
      { name: 'description', content: 'Frequently Asked Questions about White Haven Community Football Club. Find answers to common questions about our programs, membership, locations, and more.' },
      { name: 'keywords', content: 'FAQ, frequently asked questions, WHCFC, White Haven Football Club, football programs, community sports' },
      { name: 'author', content: 'White Haven Community Football Club' }
    ]);
  }
}
