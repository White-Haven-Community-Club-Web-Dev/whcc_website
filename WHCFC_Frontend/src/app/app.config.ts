import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStoryblok, StoryblokClientConfig, withLivePreview, withStoryblokComponents } from '@storyblok/angular'
import { environment } from '../environments/environment';
import { STORYBLOK_REGISTRY } from './storyblok/storyblok-registry';

const sbConfig: StoryblokClientConfig = {
  accessToken: environment.sbKey!,
  region: "eu",
  inlineRelations: true,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideStoryblok(
      sbConfig,
      withStoryblokComponents(STORYBLOK_REGISTRY),
      withLivePreview()
    ),
  ],
};
