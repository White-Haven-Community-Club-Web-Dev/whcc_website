import { Component, signal, OnInit, } from '@angular/core';
import { StoryblokWrapperComponent } from '../../storyblok/storyblok-wrapper.component';
import { StoryblokResponse, StoryblokService } from '../../services/storyblock.service';
import { Router } from '@angular/router';


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

  constructor(private sb: StoryblokService, private router:Router) { }

  ngOnInit(): void {
    let path = this.router.url;
    if(path === "/") path ="home";
    
    this.sb.getStory(path).subscribe({
      next: (data) => {
      this.pageData.set(data)
      },
      error:(err)=>{
        if(err.status===404){
          this.router.navigate(["/not-found"])
        }
        
      }
    })
  }

}