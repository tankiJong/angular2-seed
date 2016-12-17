import { OpaqueToken } from '@angular/core';


export interface AppConfig{
  apiUrl: string
}

export const appConfig: AppConfig = {
  apiUrl: process.env.API_URL
}

export const AppConfigProvider = {
  provide: appConfig,
  useValue: appConfig,
}
