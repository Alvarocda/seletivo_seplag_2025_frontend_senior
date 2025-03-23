import { Sexo } from '../home/home.types';

export interface IPessoa {
  id: number;
  nome: string;
  idade: number;
  sexo: Sexo;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: IUltimaOcorrencia;
}

export interface IUltimaOcorrencia {
  dtDesaparecimento: string;
  dataLocalizacao: string;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: IOcorrenciaEntrevDesapDto;
  listaCartaz: IListaCartaz[];
  ocoId: number;
}

export interface IOcorrenciaEntrevDesapDto {
  informacao: string;
  vestimentasDesaparecido: string;
}

export interface IListaCartaz {
  urlCartaz: string;
  tipoCartaz: string;
}
