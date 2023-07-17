import {IPeliculaGenero} from "./genero.interfaces"

export interface IPeliculas{
  id ?: number,
  nombre: string,
  descripcion: string,
  imagen: string,
  imagenPoster: string,
  genero?:string,
  peliculaGenero :IPeliculaGenero[]
}

export interface IUsuariosPeliculas{
  id ?: number,
  nombre: string,
  descripcion: string,
  imagen: string,
  imagenPoster: string,
  genero?:string,
  usuarioGenero :IPeliculaGenero[]
}

export interface IReporteResult {
  archivo : string;
}
