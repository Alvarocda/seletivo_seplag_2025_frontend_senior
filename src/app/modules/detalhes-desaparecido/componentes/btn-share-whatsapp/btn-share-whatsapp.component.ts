import { Component, Input, OnInit } from '@angular/core';
import { IPessoa } from '../../detalhes-desaparecido.types';

@Component({
  selector: 'app-btn-share-whatsapp',
  templateUrl: 'btn-share-whatsapp.component.html',
  standalone: false,
})
export class BtnShareWhatsappComponent {
  @Input({ required: true })
  pessoa!: IPessoa;

  compartilharWhatsapp(): void {
    const url = `https://wa.me/?text=PESSOA DESAPARECIDA: ${this.pessoa.nome} de ${this.pessoa.idade} anos, está DESAPARECIDO(A). Saiba mais em: ${window.location.href}`;
    window.open(url, '_blank');
  }
}
