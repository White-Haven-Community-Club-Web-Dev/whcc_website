import { Component, signal, OnInit, } from '@angular/core';
import { StoryblokWrapperComponent } from '../../storyblok/storyblok-wrapper.component';
import { StoryblokResponse, StoryblokService } from '../../services/storyblock.service';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [StoryblokWrapperComponent],
  template: `
    @if (pageData(); as page) {
      <div class="page-layout">
        <!-- Loop through the root level body array directly from Storyblok -->
        @for (block of page.content.body; track block._uid) {
          <app-storyblok-wrapper [data]="block" />
        }
      </div>
    }
  `
})
export class PageComponent implements OnInit {

  pageData = signal<StoryblokResponse['story'] | null>(null);

  constructor(private sb: StoryblokService) { }

  ngOnInit(): void {
    this.sb.getStory('home').subscribe({
      next: (data) => {
        this.pageData.set(data)
      }
    })
  }

}