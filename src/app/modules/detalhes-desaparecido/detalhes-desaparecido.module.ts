import { NgModule } from '@angular/core';

import { DetalhesDesaparecidoComponent } from './container/detalhes-desaparecido.component';
import { RouterModule } from '@angular/router';
import { routes } from './detalhes-desaparecido.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { BtnDownloadCartazComponent } from './componentes/btn-download-cartaz/btn-download-cartaz.component';
import { BtnShareWhatsappComponent } from './componentes/btn-share-whatsapp/btn-share-whatsapp.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    CommonModule,
    MatDividerModule,
  ],
  exports: [],
  declarations: [
    DetalhesDesaparecidoComponent,
    BtnDownloadCartazComponent,
    BtnShareWhatsappComponent,
  ],
  providers: [],
})
export class DetalhesDesaparecidoModule {}
