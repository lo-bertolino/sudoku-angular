import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// Remove SSR-related import
// import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    // Remove SSR-related provider
    // provideServerRendering(),
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
