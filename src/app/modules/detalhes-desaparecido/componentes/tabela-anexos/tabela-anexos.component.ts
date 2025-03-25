import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabela-anexos',
  templateUrl: 'tabela-anexos.component.html',
  styleUrls: ['tabela-anexos.component.css'],
  standalone: false,
})
export class TabelaAnexosComponent {
  displayedColumns: string[] = ['arquivo', 'tamanho', 'acao'];
  @Input({ required: true })
  anexos!: File[];

  @Output()
  onAnexoRemovido = new EventEmitter<File>();
  constructor() {}

  handleRemoveFile(file: File): void {
    this.onAnexoRemovido.emit(file);
  }
}
