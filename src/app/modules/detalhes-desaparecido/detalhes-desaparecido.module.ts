import { NgModule } from '@angular/core';

import { DetalhesDesaparecidoComponent } from './container/detalhes-desaparecido.component';
import { RouterModule } from '@angular/router';
import { routes } from './detalhes-desaparecido.routes';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { BtnDownloadCartazComponent } from './componentes/btn-download-cartaz/btn-download-cartaz.component';
import { BtnShareWhatsappComponent } from './componentes/btn-share-whatsapp/btn-share-whatsapp.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AdicionarInformacoesModalComponent } from './componentes/adicionar-informacoes-modal/adicionar-informacoes-modal.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { TabelaAnexosComponent } from './componentes/tabela-anexos/tabela-anexos.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    CommonModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
  exports: [],
  declarations: [
    DetalhesDesaparecidoComponent,
    BtnDownloadCartazComponent,
    BtnShareWhatsappComponent,
    AdicionarInformacoesModalComponent,
    TabelaAnexosComponent,
  ],
  providers: [],
})
export class DetalhesDesaparecidoModule {}
