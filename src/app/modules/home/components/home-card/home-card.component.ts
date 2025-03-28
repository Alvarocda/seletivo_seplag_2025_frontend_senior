import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnInit,
} from '@angular/core';
import { IDesaparecido, ListaSexos } from '../../home.types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: 'home-card.component.html',
  standalone: false,
})
export class HomeCardComponent {
  listaSexos = ListaSexos;

  carregandoImagem: boolean = true;

  @Input({ required: true })
  desaparecido!: IDesaparecido;

  constructor(private _router: Router) {}

  detalharDesaparecido() {
    this._router.navigate(['detalhes-desaparecido', this.desaparecido.id]);
  }

  toggleCarregandoImagem(carregando: boolean) {
    this.carregandoImagem = carregando;
  }
}
