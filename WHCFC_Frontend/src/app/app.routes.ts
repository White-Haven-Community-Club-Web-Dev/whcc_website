import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { inject, NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoryblokService } from '@storyblok/angular';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: "not-found", component: NotFoundComponent },
  {
    path: '**', loadComponent: () => import("./pages/page/page.component").then(p => p.PageComponent),
  },
];

//  resolve: {
//       // story: async (route: ActivatedRouteSnapshot) => {
//       //   const slug = route.url.map((s) => s.path).join('/') || 'home';
//       //   const client = inject(StoryblokService).getClient();
//       //   const { data } = await client.stories.get(slug, {
//       //     query: {
//       //       version: environment.sbVersion as any,
//       //     },
//       //   });
//       //   return data?.story;
//       // }
//     }