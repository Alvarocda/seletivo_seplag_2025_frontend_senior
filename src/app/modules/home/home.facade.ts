import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IPaginacaoRequest,
  IResultadoPaginado,
} from '../shared/paginacao/paginacao.types';
import { IDesaparecido, IEstatisticas, IFiltro } from './home.types';
import { HomeState } from './state/home.state';
import { DesaparecidosService } from './services/desaparecidos.service';
import { HttpParams } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Injectable({ providedIn: 'root' })
export class HomeFacade {
  paginacao$: Observable<IPaginacaoRequest>;
  desaparecidos$: Observable<IResultadoPaginado<IDesaparecido>>;
  carregando$: Observable<boolean>;
  filtro$: Observable<IFiltro>;
  estatisticas$: Observable<IEstatisticas>;

  constructor(
    private _state: HomeState,
    private _desaparecidosService: DesaparecidosService
  ) {
    this.paginacao$ = this._state.paginacao$;
    this.desaparecidos$ = this._state.desaparecidos$;
    this.carregando$ = this._state.carregando$;
    this.filtro$ = this._state.filtroBusca$;
    this.estatisticas$ = this._state.estatisticas$;
  }

  setarFiltro(filtro: IFiltro): void {
    this._state.filtroBusca = filtro;
    this._state.paginacao = { ...this._state.paginacao, pagina: 0 };
    this.carregarDesaparecidos();
  }

  carregarEstatisticas(): void {
    this._desaparecidosService.carregarEstatisticas().subscribe({
      next: (res: IEstatisticas) => {
        this._state.estatisticas = res;
      },
      error: (err) => {},
    });
  }

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
    if (this._state.filtroBusca.faixaIdadeFinal) {
      params = params.set(
        'faixaIdadeInicial',
        this._state.filtroBusca.faixaIdadeInicial.toString()
      );
    }
    if (this._state.filtroBusca.faixaIdadeFinal) {
      params = params.set(
        'faixaIdadeFinal',
        this._state.filtroBusca.faixaIdadeFinal.toString()
      );
    }
    if (this._state.filtroBusca.sexo) {
      params = params.set('sexo', this._state.filtroBusca.sexo.toString());
    }
    if (this._state.filtroBusca.status) {
      params = params.set('status', this._state.filtroBusca.status.toString());
    }
    if (this._state.filtroBusca.nome) {
      params = params.set('nome', this._state.filtroBusca.nome.toString());
    }
    return params;
  }

  handlePagination(event: PageEvent) {
    this._state.paginacao = {
      pagina: event.pageIndex,
      porPagina: event.pageSize,
    };
    this.carregarDesaparecidos();
  }
}
