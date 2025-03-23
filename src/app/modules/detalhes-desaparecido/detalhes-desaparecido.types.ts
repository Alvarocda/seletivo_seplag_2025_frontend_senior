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
  tipoCartaz: TipoCartaz;
}

export const TiposCartaz = {
  INSTA_DESAPARECIDO: 'Instagram',
  JPG_DESAPARECIDO: 'Cartaz',
  PDF_DESAPARECIDO: 'PDF',
};

export type TipoCartaz = keyof typeof TiposCartaz;
