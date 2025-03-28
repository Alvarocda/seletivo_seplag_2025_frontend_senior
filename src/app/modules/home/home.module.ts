import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHomeCardSkeletonComponent } from './components/home-card-skeleton/home-card-skeleton.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    DatePipe,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [],
  declarations: [
    HomeComponent,
    HomeCardComponent,
    AppHomeCardSkeletonComponent,
  ],
  providers: [],
})
export class HomeModule {}
