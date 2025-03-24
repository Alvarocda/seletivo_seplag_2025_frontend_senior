import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { IDesaparecido } from '../home.types';
import { IResultadoPaginado } from '../../shared/paginacao/paginacao.types';
@Injectable({ providedIn: 'root' })
export class DesaparecidosService {
  constructor(private httpClient: HttpClient) {}

  listarDesaparecidos(
    params: HttpParams
  ): Observable<IResultadoPaginado<IDesaparecido>> {
    const url = `${environment.abitusUrl}v1/pessoas/aberto/filtro`;
    return this.httpClient.get<IResultadoPaginado<IDesaparecido>>(url, {
      params: params,
    });
  }
}
