import { Component, Input, OnInit } from '@angular/core';
import { IListaCartaz } from '../../detalhes-desaparecido.types';

@Component({
  selector: 'app-btn-download-cartaz',
  templateUrl: 'btn-download-cartaz.component.html',
  standalone: false,
  styleUrls: ['btn-download-cartaz.component.css'],
})
export class BtnDownloadCartazComponent implements OnInit {
  @Input({ required: true })
  cartaz!: IListaCartaz;

  tituloBotao!: string;
  iconeBotao!: string;
  css!: string;

  constructor() {}

  private _gerarTituloCartaz(): void {
    switch (this.cartaz.tipoCartaz) {
      case 'INSTA_DESAPARECIDO':
        this.tituloBotao = 'Baixe o cartaz para instagram';
        this.iconeBotao = 'assets/images/instagram.svg';
        this.css = 'instagram';
        break;
      case 'PDF_DESAPARECIDO':
        this.tituloBotao = 'Baixe o cartaz em PDF';
        this.iconeBotao = 'assets/images/pdf.png';
        this.css = 'pdf';
        break;
      case 'JPG_DESAPARECIDO':
      default:
        this.tituloBotao = 'Baixe o cartaz';
        this.iconeBotao = 'assets/images/jpg-icon.svg';
        this.css = 'file';
        break;
    }
  }

  ngOnInit() {
    this._gerarTituloCartaz();
  }

  baixarCartaz(): void {
    window.open(this.cartaz.urlCartaz, '_blank');
  }
}
