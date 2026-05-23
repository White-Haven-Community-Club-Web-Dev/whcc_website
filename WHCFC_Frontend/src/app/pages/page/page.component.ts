import { Component, signal, OnInit, inject, computed, ChangeDetectionStrategy, } from '@angular/core';
import { Router } from '@angular/router';
import { Story, StoryblokComponent, StoryblokService } from '@storyblok/angular';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StoryblokComponent],
  template: `
       <div>
      <!-- Pass content directly - componnent handles null internally -->
      <sb-component [sbBlok]="storyContent()" />
    </div>
  `
})
export class PageComponent implements OnInit {
  private readonly sb = inject(StoryblokService)
  private client = this.sb.getClient();
  readonly story = signal<Story | null>(null);
  readonly loading = signal(true);
  readonly storyContent = computed(() => this.story()?.content);
  private readonly router = inject(Router);

  async ngOnInit(): Promise<void> {
    try {
      let path = this.router.url;
      if (path === "/") path = "home";

      const { data, error } = await this.client.stories.get(path, {
        query: {
          version: environment.sbVersion! as any
        }
      });
      if (error) throw error
      this.story.set((data?.story as Story) || null);      
    } catch (error) {
      if ((error as any).response.status === 404) {
        this.router.navigateByUrl("/not-found")
      }
    } finally {
      this.loading.set(false);
    }
  }

}