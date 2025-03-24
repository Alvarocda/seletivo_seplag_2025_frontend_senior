import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IPessoa } from '../detalhes-desaparecido.types';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalhesDesaparecidoFacade } from '../detalhes-desaparecido.facade';
import { Subject, takeUntil } from 'rxjs';
import { ListaSexos } from '../../home/home.types';

@Component({
  selector: 'app-detalhes-desaparecido',
  templateUrl: 'detalhes-desaparecido.component.html',
  standalone: false,
})
export class DetalhesDesaparecidoComponent implements OnInit, OnDestroy {
  carregando: boolean = true;
  pessoaDesaparecida!: IPessoa;
  _isDestroyed$ = new Subject<void>();
  foiEncontrada: boolean = false;
  listaSexos = ListaSexos;
  private readonly _route = inject(ActivatedRoute);
  private readonly _facade = inject(DetalhesDesaparecidoFacade);

  ngOnInit() {
    this._facade.carregando$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((carregando: boolean) => {
        console.log(carregando);
        this.carregando = carregando;
      });

    this._facade.pessoaDesaparecida$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((pessoa: IPessoa) => {
        this.pessoaDesaparecida = pessoa;
        if (pessoa) {
          this.foiEncontrada =
            pessoa?.ultimaOcorrencia?.dataLocalizacao !== null;
        }
      });

    this._route.paramMap.subscribe((params) => {
      const pessoaId = params.get('id');
      if (pessoaId) {
        this._facade.carregarDetalhesPessoaDesaparecida(pessoaId);
      }
    });
  }

  getDiasDesaparecido(): number {
    const dataDesaparecimento = new Date(
      this.pessoaDesaparecida.ultimaOcorrencia!.dtDesaparecimento
    );
    const dataAtual = new Date();
    const diferencaEmMilissegundos =
      dataAtual.getTime() - dataDesaparecimento.getTime();
    const diferencaEmDias = Math.floor(
      diferencaEmMilissegundos / (1000 * 60 * 60 * 24)
    );
    return diferencaEmDias;
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
    this._isDestroyed$.complete();
  }
}
