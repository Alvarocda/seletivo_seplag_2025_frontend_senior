import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator'
import { HomeCardComponent } from './components/home-card/home-card.component';
import {  MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, DatePipe, MatPaginatorModule, MatProgressSpinnerModule],
  exports: [],
  declarations: [HomeComponent, HomeCardComponent],
  providers: [],
})
export class HomeModule {}
