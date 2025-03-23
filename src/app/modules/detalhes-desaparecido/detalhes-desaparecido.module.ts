import { NgModule } from '@angular/core';

import { DetalhesDesaparecidoComponent } from './container/detalhes-desaparecido.component';
import { RouterModule } from '@angular/router';
import { routes } from './detalhes-desaparecido.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    CommonModule,
    MatDividerModule,
  ],
  exports: [],
  declarations: [DetalhesDesaparecidoComponent],
  providers: [],
})
export class DetalhesDesaparecidoModule {}
