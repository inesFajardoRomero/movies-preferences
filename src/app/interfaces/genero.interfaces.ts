export interface IGenero {
  id ?: number,
  nombre: string,
  peliculaGenero: IPeliculaGenero|null
}

export interface IPeliculaGenero{
  peliculaId: number,
  generoId: number,
  pelicula: string,
  genero:IGenero
}
