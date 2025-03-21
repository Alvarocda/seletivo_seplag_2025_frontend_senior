import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, DatePipe],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
