import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IPessoa } from '../detalhes-desaparecido.types';

@Injectable({ providedIn: 'root' })
export class DesaparecidosService {
  constructor(private _httpClient: HttpClient) {}

  carregarDetalhesPessoaDesaparecida(id: string): Observable<IPessoa> {
    const url = `${environment.abitusUrl}v1/pessoas/${id}`;
    return this._httpClient.get<IPessoa>(url);
  }
}
