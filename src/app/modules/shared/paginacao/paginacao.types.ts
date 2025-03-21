export interface IPaginacaoRequest {
    pagina: number,
    porPagina: number;
}



export interface IResultadoPaginado<T> {
    totalPages: number;
    totalElements: number;
    last: boolean;
    numberOfElements: number;
    first: boolean;
    size: number;
    content: T[]
}