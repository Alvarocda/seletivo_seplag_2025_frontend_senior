import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDesaparecido } from '../../home/home.types';
import { IPessoa } from '../detalhes-desaparecido.types';

@Injectable({providedIn: 'root'})
export class DetalhesDesaparecidoState {
    _carregando$: BehaviorSubject<boolean>;
    _pessoaDesaparecida$: BehaviorSubject<IPessoa>;

    constructor() { 
        this._carregando$ = new BehaviorSubject<boolean>(false);
        this._pessoaDesaparecida$ = new BehaviorSubject<IPessoa>({} as IPessoa);
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



    get pessoaDesaparecida$() : Observable<IPessoa>{
        return this._pessoaDesaparecida$.asObservable();
    }

    get pessoaDesaparecida() : IPessoa{
        return this._pessoaDesaparecida$.value;
    }

    set pessoaDesaparecida(value: IPessoa) {
        this._pessoaDesaparecida$.next(value);
    }


    limparEstado(): void {
        this.carregando = true;
        this.pessoaDesaparecida = {} as IPessoa;
    }
    
    
}