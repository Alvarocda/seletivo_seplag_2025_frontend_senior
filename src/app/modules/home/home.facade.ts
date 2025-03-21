import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IPaginacaoRequest,
  IResultadoPaginado,
} from '../shared/paginacao/paginacao.types';
import { IDesaparecido, IFiltro } from './home.types';
import { HomeState } from './state/home.state';
import { DesaparecidosService } from './services/desaparecidos.service';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  paginacao$: Observable<IPaginacaoRequest>;
  desaparecidos$: Observable<IResultadoPaginado<IDesaparecido>>;
  carregando$: Observable<boolean>;
  filtro$: Observable<IFiltro>;

  constructor(
    private _state: HomeState,
    private _desaparecidosService: DesaparecidosService
  ) {
    this.paginacao$ = this._state.paginacao$;
    this.desaparecidos$ = this._state.desaparecidos$;
    this.carregando$ = this._state.carregando$;
    this.filtro$ = this._state.filtroBusca$;
  }

  setarFiltro(filtro: IFiltro): void {
    this._state.filtroBusca = filtro;
  }

  // handlePagination(event): void {

  // }

  carregarDesaparecidos(): void {
    this._state.carregando = true;
    const params = this._criarParams();
    this._desaparecidosService.listarDesaparecidos(params).subscribe({
      next: (res: IResultadoPaginado<IDesaparecido>) => {
        this._state.desaparecidos = res;
        this._state.carregando = false;
      },
      error: (err) => {
        this._state.carregando = false;
      },
    });
  }

  private _criarParams(): HttpParams {
    let params = new HttpParams()
      .set('pagina', this._state.paginacao.pagina.toString())
      .set('porPagina', this._state.paginacao.porPagina.toString());
    if(this._state.filtroBusca.faixaIdadeFinal) {
        params = params.set('faixaIdadeInicial', this._state.filtroBusca.faixaIdadeInicial.toString())
    }
    if(this._state.filtroBusca.faixaIdadeFinal) {
        params = params.set('faixaIdadeFinal', this._state.filtroBusca.faixaIdadeFinal.toString())
    }
    if(this._state.filtroBusca.sexo) {
        params = params.set('sexo', this._state.filtroBusca.sexo.toString())
    }
    if(this._state.filtroBusca.status) {
        params = params.set('status', this._state.filtroBusca.status.toString())
    }
    if(this._state.filtroBusca.nome) {
        params = params.set('nome', this._state.filtroBusca.nome.toString())
    }
    return params;
  }
}
