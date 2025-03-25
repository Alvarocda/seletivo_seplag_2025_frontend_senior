import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DetalhesDesaparecidoFacade } from '../../detalhes-desaparecido.facade';
import { Subject, takeUntil } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { IInformacao, IPessoa } from '../../detalhes-desaparecido.types';
@Component({
  selector: 'app-adicionar-informacoes-modal',
  templateUrl: 'adicionar-informacoes-modal.component.html',
  standalone: false,
})
export class AdicionarInformacoesModalComponent implements OnInit, OnDestroy {
  private _isDestroyed$ = new Subject<void>();

  dialogRef = inject(MatDialogRef<AdicionarInformacoesModalComponent>);
  enviandoInformacao: boolean = false;
  anexos: File[] = [];

  private pessoa: IPessoa = inject<IPessoa>(MAT_DIALOG_DATA);
  private _fb: FormBuilder = inject(FormBuilder);
  private _facade: DetalhesDesaparecidoFacade = inject(
    DetalhesDesaparecidoFacade
  );

  extensoesAceitas = '.png, .jpg, .jpeg';
  maxFileSize = 3 * 1024 * 1024; //Tamanho máximo do anexo é 3mb
  formInformacoes!: FormGroup;

  constructor(private _toastr: ToastrService) {}

  ngOnInit() {
    this._facade.enviandoInformacao$
      .pipe(takeUntil(this._isDestroyed$))
      .subscribe((enviando) => (this.enviandoInformacao = enviando));
    this.formInformacoes = this._fb.group({
      informacao: new FormControl('', Validators.required),
      data: new FormControl(null, Validators.required),
    });
  }

  handleAddFile(event: any): void {
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i] as File;
      if (file) {
        if (file.size > this.maxFileSize) {
          this._toastr.warning(
            `O tamanho do arquivo ${file.name} excede o limite máximo de 3MB.`,
            'Tamanho máximo excedido'
          );
          return;
        }
        this.anexos = [...this.anexos, file];
      }
    }
  }

  handleRemoveFile(file: File): void {
    this.anexos = [...this.anexos.filter((f) => f !== file)];
  }

  enviarInformacao(): void {
    if (this.formInformacoes.valid) {
      const informacao = this.formInformacoes.value as IInformacao;
      informacao.files = this.anexos;
      informacao.ocoId = this.pessoa.ultimaOcorrencia!.ocoId;
    }
  }

  ngOnDestroy(): void {
    this._isDestroyed$.next();
    this._isDestroyed$.complete();
  }
}
