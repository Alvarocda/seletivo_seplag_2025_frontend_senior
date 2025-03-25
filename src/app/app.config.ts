import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { CustomPaginatorIntl } from './modules/core/paginator-config/paginator.intl';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: MatPaginatorIntl,
      useClass: CustomPaginatorIntl,
    },
    provideNativeDateAdapter(),

    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        class: 'w-full',
      },
    },
  ],
};
