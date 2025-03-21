export interface IDesaparecido {
    id: number
    nome: string
    idade: number
    sexo: string
    vivo: boolean
    urlFoto: string
    ultimaOcorrencia: IUltimaOcorrencia
  }
  
  export interface IUltimaOcorrencia {
    dtDesaparecimento: string
    dataLocalizacao: any
    encontradoVivo: boolean
    localDesaparecimentoConcat: string
    ocorrenciaEntrevDesapDTO: IOcorrenciaEntrevDesapDto
    listaCartaz: any
    ocoId: number
  }
  
  export interface IOcorrenciaEntrevDesapDto {
    informacao: any
    vestimentasDesaparecido: string
  }

  export interface IFiltro {
    faixaIdadeInicial: number;
    faixaIdadeFinal: number;
    sexo: number;
    status: string;
    nome: number;
  }


  export const ListaSexos = {
    MASCULINO: 'Masculino',
    FEMININO: 'Feminino'
  }  

  export const ListaStatusDesaparecido = {
    LOCALIZADO: 'Localizado',
    DESAPARECIDO: 'Desaparecido'
  }

  export type Sexo = keyof typeof ListaSexos;

  export type StatusDesaparecido = keyof typeof ListaStatusDesaparecido;
