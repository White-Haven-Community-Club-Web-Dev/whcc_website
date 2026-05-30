import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {
  provideStoryblok,
  withLivePreview,
  withStoryblokComponents,
  type StoryblokClientConfig,
} from '@storyblok/angular';
import { STORYBLOK_REGISTRY } from './storyblok/storyblok-registry';
import { environment } from '../environments/environment.development';

const sbConfig: StoryblokClientConfig = {
  accessToken: environment.sbKey!,
  region: 'eu',
  inlineRelations: true,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideStoryblok(
      sbConfig,
      withStoryblokComponents(STORYBLOK_REGISTRY),
      withLivePreview(),
    ),
  ],
};