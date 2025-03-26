import { NgModule } from '@angular/core';

import { NotFoundComponent } from './container/not-found.component';
import { Router, RouterModule } from '@angular/router';
import { routes } from './not-found.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [NotFoundComponent],
  providers: [],
})
export class NotFoundModule {}
