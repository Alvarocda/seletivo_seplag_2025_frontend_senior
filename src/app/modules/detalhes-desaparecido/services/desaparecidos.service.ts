import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IInformacao, IPessoa } from '../detalhes-desaparecido.types';

@Injectable({ providedIn: 'root' })
export class DesaparecidosService {
  constructor(private _httpClient: HttpClient) {}

  carregarDetalhesPessoaDesaparecida(id: string): Observable<IPessoa> {
    const url = `${environment.abitusUrl}v1/pessoas/${id}`;
    return this._httpClient.get<IPessoa>(url);
  }

  enviarInformacoes(informacao: IInformacao): Observable<any> {
    const url = `${environment.abitusUrl}v1/ocorrencias/informacoes-desaparecido`;
    let params = new HttpParams()
      .set('informacao', informacao.informacao)
      .set('descricao', '')
      .set('data', informacao.data.toString())
      .set('ocoId', informacao.ocoId);
    let formData = new FormData();
    if (informacao.files?.length) {
      informacao.files.forEach((file: File) => {
        formData.append('files', file);
      });
    }
    return this._httpClient.post(url, formData, { params: params });
  }
}
