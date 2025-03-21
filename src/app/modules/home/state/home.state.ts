import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPaginacaoRequest, IResultadoPaginado } from '../../shared/paginacao/paginacao.types';
import { IDesaparecido, IFiltro } from '../home.types';

@Injectable({providedIn: 'root'})
export class HomeState {

    private _paginacao$: BehaviorSubject<IPaginacaoRequest>;

    private _desaparecidos$: BehaviorSubject<IResultadoPaginado<IDesaparecido>>

    private _carregando$: BehaviorSubject<boolean>

    private _filtroBusca$: BehaviorSubject<IFiltro>




    constructor() { 
        this._desaparecidos$ = new BehaviorSubject<IResultadoPaginado<IDesaparecido>>({} as IResultadoPaginado<IDesaparecido>);
        this._paginacao$ = new BehaviorSubject<IPaginacaoRequest>({pagina: 0, porPagina: 12})
        this._carregando$ = new BehaviorSubject<boolean>(false);
        this._filtroBusca$ = new BehaviorSubject<IFiltro>({} as IFiltro);
    }


    get paginacao$(): Observable<IPaginacaoRequest> {
        return this._paginacao$.asObservable();
    }

    get paginacao(): IPaginacaoRequest {
        return this._paginacao$.value;
    }

    set paginacao(value: IPaginacaoRequest) {
        this._paginacao$.next(value);
    }


    get desaparecidos$(): Observable<IResultadoPaginado<IDesaparecido>> {
        return this._desaparecidos$.asObservable();
    }

    get desaparecidos(): IResultadoPaginado<IDesaparecido> {
        return this._desaparecidos$.value;
    }

    set desaparecidos(value: IResultadoPaginado<IDesaparecido>) {
        this._desaparecidos$.next(value);
    }

    get carregando$(): Observable<boolean> {
        return this._carregando$.asObservable();
    }

    get carregando(): boolean {
        return this._carregando$.value;
    }

    set carregando(value: boolean) {
        this._carregando$.next(value);
    }


    get filtroBusca$() : Observable<IFiltro> {
        return this._filtroBusca$.asObservable();    
    }

    get filtroBusca(): IFiltro {
        return this._filtroBusca$.value;
    }

    set filtroBusca(filtro: IFiltro){
        this._filtroBusca$.next(filtro);
    }


    limparEstado(): void {
        this.desaparecidos = {} as IResultadoPaginado<IDesaparecido>;
        this.paginacao = {pagina: 0, porPagina: 10};
        this.filtroBusca = {} as IFiltro;
        this.carregando = true;
    }
    
}