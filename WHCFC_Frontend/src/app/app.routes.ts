import { ActivatedRouteSnapshot, Router, RouterModule, Routes } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoryblokService } from '@storyblok/angular';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: "not-found", component: NotFoundComponent },
  {
    path: '**', loadComponent: () => import("./pages/page/page.component").then(p => p.PageComponent),
    resolve: {
      story: async (route: ActivatedRouteSnapshot) => {
        const router = inject(Router);
        try {
          const slug = route.url.map((s) => s.path).join('/') || 'home';
          const client = inject(StoryblokService).getClient();
          const { data, error } = await client.stories.get(slug, {
            query: {
              version: environment.sbVersion as any,
            },
          });
          if (error) throw error;
          return data?.story;
        } catch (error) {
          router.navigateByUrl("not-found")
          throw error
        }
      }
    },

  },
];

