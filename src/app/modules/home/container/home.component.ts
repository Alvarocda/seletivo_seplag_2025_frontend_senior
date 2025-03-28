import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Subject, takeUntil } from 'rxjs';
import {
  IPaginacaoRequest,
  IResultadoPaginado,
} from '../../shared/paginacao/paginacao.types';
import {
  IDesaparecido,
  IEstatisticas,
  IFiltro,
  ListaSexos,
} from '../home.types';
import { PageEvent } from '@angular/material/paginator';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit, OnDestroy {
  private _isDestroyed$ = new Subject<void>();
  carregando: boolean = true;
  paginacao: IPaginacaoRequest = { pagina: 0, porPagina: 20 };
  filtro: IFiltro = {} as IFiltro;
  listaSexos = ListaSexos;
  desaparecidos: IResultadoPaginado<IDesaparecido> =
    {} as IResultadoPaginado<IDesaparecido>;

  estatisticas?: IEstatisticas;
  formBusca!: FormGroup;

  constructor(private _facade: HomeFacade, private _fb: FormBuilder) {}

  ngOnInit() {
    this._facade.carregando$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((carregando: boolean) => {
        this.carregando = carregando;
      });

    this._facade.paginacao$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((paginacao: IPaginacaoRequest) => {
        this.paginacao = paginacao;
      });

    this._facade.filtro$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((filtro: IFiltro) => {
        this.filtro = filtro;
      });

    this._facade.desaparecidos$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((desaparecidos: IResultadoPaginado<IDesaparecido>) => {
        this.desaparecidos = desaparecidos;
      });

    this._facade.estatisticas$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((estatisticas: IEstatisticas) => {
        this.estatisticas = estatisticas;
      });

    this.formBusca = this._fb.group({
      faixaIdadeInicial: new FormControl(),
      faixaIdadeFinal: new FormControl(),
      sexo: new FormControl(),
      status: new FormControl('DESAPARECIDO'),
      nome: new FormControl(),
    });

    this._facade.carregarDesaparecidos();
    this._facade.carregarEstatisticas();
  }

  handlePagination(event: PageEvent) {
    this._facade.handlePagination(event);
    const titulo = window.document.getElementById('resultados');
    titulo?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  limparFormBusca(): void {
    this.formBusca.reset();
    this.formBusca.patchValue({ status: 'DESAPARECIDO' });
    this._facade.setarFiltro({} as IFiltro);
  }

  buscar(): void {
    const filtro: IFiltro = this.formBusca.value;
    this._facade.setarFiltro(filtro);
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
    this._isDestroyed$.complete();
  }
}
