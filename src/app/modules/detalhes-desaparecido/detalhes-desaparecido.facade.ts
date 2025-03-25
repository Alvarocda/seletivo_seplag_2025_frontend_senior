import { Injectable } from '@angular/core';
import { DesaparecidosService } from './services/desaparecidos.service';
import { Observable } from 'rxjs';
import { IInformacao, IPessoa } from './detalhes-desaparecido.types';
import { DetalhesDesaparecidoState } from './state/detalhes-desaparecido.state';
import { Dialog } from '@angular/cdk/dialog';
import { AdicionarInformacoesModalComponent } from './componentes/adicionar-informacoes-modal/adicionar-informacoes-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class DetalhesDesaparecidoFacade {
  carregando$: Observable<boolean>;
  pessoaDesaparecida$: Observable<IPessoa>;
  enviandoInformacao$: Observable<boolean>;

  constructor(
    private _desaparecidosService: DesaparecidosService,
    private _state: DetalhesDesaparecidoState,
    private _dialogService: MatDialog,
    private _toastrService: ToastrService
  ) {
    this.carregando$ = this._state._carregando$;
    this.pessoaDesaparecida$ = this._state._pessoaDesaparecida$;
    this.enviandoInformacao$ = this._state._enviandoInformacao$;
  }

  carregarDetalhesPessoaDesaparecida(id: string): void {
    this._state.carregando = true;
    this._desaparecidosService
      .carregarDetalhesPessoaDesaparecida(id)
      .subscribe({
        next: (pessoa: IPessoa) => {
          this._state.pessoaDesaparecida = pessoa;
          this._state.carregando = false;
        },
        error: (error: any) => {
          console.error(error);
          this._state.carregando = false;
        },
      });
  }

  enviarInformacoes(
    informacao: IInformacao,
    dialogRef: MatDialogRef<AdicionarInformacoesModalComponent>
  ): void {
    this._state.enviandoInformacao = true;
    this._desaparecidosService.enviarInformacoes(informacao).subscribe({
      next: () => {
        this._toastrService.success(
          'Informações enviadas com sucesso',
          'Sucesso'
        );
        this._state.enviandoInformacao = false;
        dialogRef.close();
      },
      error: (error: any) => {
        this._toastrService.error(
          'Falha ao enviar informações.\n Tente novamente mais tarde',
          'Erro'
        );
        this._state.enviandoInformacao = false;
      },
    });
  }

  abrirModalAdicionarInformacoes(pessoaDesaparecida: IPessoa): void {
    this._dialogService.open(AdicionarInformacoesModalComponent, {
      data: pessoaDesaparecida,
      maxWidth: '600px',
      width: '100%',
      panelClass: 'm-4',
    });
  }
}
