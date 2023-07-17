
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApi } from '../interfaces/api.interfaces';
import { IGenero, IPeliculaGenero} from '../interfaces/genero.interfaces';
import { IPeliculas, IReporteResult, IUsuariosPeliculas } from '../interfaces/peliculas.interface';
import * as _ from 'lodash';
import { SeguridadComponent } from '../modules/seguridad/seguridad.component';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient, private seguridadService:SeguridadService) { }

  public listGenero: IGenero[] = [];
  public listSliders: IPeliculas[] = [];

  public PeliculasCategorias:Object = {};
  public PeliculasCategoriasRecomendas:Object = {};
  public listSlidersSection: any[] = [];
  private urlGenero = 'https://localhost:7189/api/Genero';
  private urlMovieTop = 'https://localhost:7189/api/Pelicula';
  private urlMovieRecomendadas = 'https://localhost:7189/api/Usuario/';
  private urlReporteria = 'https://localhost:7189/api/Reporteria';

  async getGeneros(){
    this.http.get<IGenero[]>(this.urlGenero )
    .subscribe((resp:IGenero[]) =>{
      this.listGenero = resp;
    })
  }

  async getMoviesTop(){
    this.http.get<IPeliculas[]>(this.urlMovieTop)
    .subscribe((resp:IPeliculas[]) =>{
      this.listSliders = resp;
    })
  }

  getReporte(){
    return this.http.get<IReporteResult>(this.urlReporteria)
  }

  async getMoviesCategorias(){
    this.http.get<IPeliculas[]>(this.urlMovieTop)
    .subscribe((resp:IPeliculas[]) =>{
      this.listSlidersSection = [];
      for (let i = 0; i < resp.length; i++) {
        for(let j=0; j < resp[i].peliculaGenero.length; j++){
          const genero:IPeliculaGenero = resp[i].peliculaGenero[j];
          const finGenero = this.listGenero.find(g => genero.generoId === g.id);
          const element:IPeliculas = {
            ...resp[i],
            genero:finGenero?.nombre,

          }
          this.listSlidersSection.push(element);
        }
      }
      this.PeliculasCategorias =  _.groupBy(this.listSlidersSection, 'genero');
    })
  }

  async getMoviesRecomendadas(){
    this.http.get<IUsuariosPeliculas>(this.urlMovieRecomendadas+this.seguridadService.obtenerLlaveJWT("id"))
    .subscribe((resp:IUsuariosPeliculas) =>{
      this.listSlidersSection = [];
      for(let i=0; i < this.listSliders.length; i++){
        const el = this.listSliders[i];
        for(let j=0; j < el.peliculaGenero.length; j++){
          const findNameGenero = this.listGenero.find(g =>  el.peliculaGenero[j].generoId === g.id);
          const finGenero:any = resp.usuarioGenero.find(g => el.peliculaGenero[j].generoId === g.generoId);
          if(finGenero){
            const element:IPeliculas = {
              ...el,
              genero:findNameGenero?.nombre,
            }
            console.log(finGenero);
            this.listSlidersSection.push(element);
          }
        }
      }
      this.PeliculasCategoriasRecomendas =  _.groupBy(this.listSlidersSection, 'genero');
        /*for(let j=0; j < resp.usuarioGenero.length; j++){
          const genero:IPeliculaGenero = resp.usuarioGenero[j];
          const finGenero:any = this.listGenero.find(g => genero.generoId === g.id);
          console.log(this.listSliders)
          const element:IUsuariosPeliculas = {
            ...resp,
            genero:finGenero?.nombre,

          }
          this.listSlidersSection.push(element);
        }*/


    })
  }
}
