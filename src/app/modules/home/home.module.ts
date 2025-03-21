import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, DatePipe, MatPaginatorModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
