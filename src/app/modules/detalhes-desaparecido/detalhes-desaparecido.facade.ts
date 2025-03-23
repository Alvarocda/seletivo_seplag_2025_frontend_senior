import { Injectable } from '@angular/core';
import { DesaparecidosService } from './services/desaparecidos.service';
import { Observable } from 'rxjs';
import { IPessoa } from './detalhes-desaparecido.types';
import { DetalhesDesaparecidoState } from './state/detalhes-desaparecido.state';

@Injectable({ providedIn: 'root' })
export class DetalhesDesaparecidoFacade {
  carregando$: Observable<boolean>;
  pessoaDesaparecida$: Observable<IPessoa>;

  constructor(
    private _desaparecidosService: DesaparecidosService,
    private _state: DetalhesDesaparecidoState
  ) {
    this.carregando$ = this._state._carregando$;
    this.pessoaDesaparecida$ = this._state._pessoaDesaparecida$;
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
}
