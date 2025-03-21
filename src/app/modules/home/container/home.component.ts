import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeFacade } from '../home.facade';
import { Subject, takeUntil } from 'rxjs';
import { IPaginacaoRequest, IResultadoPaginado } from '../../shared/paginacao/paginacao.types';
import { IDesaparecido, IFiltro } from '../home.types';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    standalone: false,
})

export class HomeComponent implements OnInit, OnDestroy {
    private _isDestroyed$ = new Subject<void>();
    carregando: boolean = true;
    paginacao: IPaginacaoRequest = {pagina: 0, porPagina: 12};
    filtro: IFiltro = {} as IFiltro;
    desaparecidos: IResultadoPaginado<IDesaparecido> = {} as IResultadoPaginado<IDesaparecido>;

    constructor(private _facade: HomeFacade) { }
    

    ngOnInit() { 
        this._facade.carregando$.pipe(takeUntil(this._isDestroyed$)).subscribe((carregando: boolean) => {
            this.carregando = carregando;
        });

        this._facade.paginacao$.pipe(takeUntil(this._isDestroyed$)).subscribe((paginacao: IPaginacaoRequest) => {
            this.paginacao = paginacao;
        });

        this._facade.filtro$.pipe(takeUntil(this._isDestroyed$)).subscribe((filtro: IFiltro) => {
            this.filtro = filtro;
        });

        this._facade.desaparecidos$.pipe(takeUntil(this._isDestroyed$)).subscribe((desaparecidos: IResultadoPaginado<IDesaparecido>) => {
            this.desaparecidos = desaparecidos;
        });


        this._facade.carregarDesaparecidos();
    }



    ngOnDestroy(): void {
        this._isDestroyed$.next();
        this._isDestroyed$.complete();
    }
}