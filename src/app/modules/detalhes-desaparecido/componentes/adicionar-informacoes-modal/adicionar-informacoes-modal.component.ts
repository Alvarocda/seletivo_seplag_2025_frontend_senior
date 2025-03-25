import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DetalhesDesaparecidoFacade } from '../../detalhes-desaparecido.facade';
import { Subject, takeUntil } from 'rxjs';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-informacoes-modal',
  templateUrl: 'adicionar-informacoes-modal.component.html',
  standalone: false,
})
export class AdicionarInformacoesModalComponent implements OnInit, OnDestroy {
  private _isDestroyed$ = new Subject<void>();

  dialogRef = inject(MatDialogRef<AdicionarInformacoesModalComponent>);
  enviandoInformacao: boolean = false;

  private _fb: FormBuilder = inject(FormBuilder);
  private _facade: DetalhesDesaparecidoFacade = inject(
    DetalhesDesaparecidoFacade
  );

  formInformacoes!: FormGroup;

  ngOnInit() {
    // this._facade.enviandoInformacao$
    //   .pipe(takeUntil(this._isDestroyed$))
    //   .subscribe((enviando) => (this.enviandoInformacao = enviando));
    this.formInformacoes = this._fb.group({
      informacao: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      data: new FormControl(null, Validators.required),
    });
  }

  enviarInformacao(): void {
    this.enviandoInformacao = true;
    setTimeout(() => {
      this.enviandoInformacao = false;
    }, 5000);
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
    this._isDestroyed$.complete();
  }
}
