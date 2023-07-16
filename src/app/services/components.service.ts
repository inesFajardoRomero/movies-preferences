
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApi } from '../interfaces/api.interfaces';
import { Genero, ListGenero } from '../interfaces/sidebar.interfaces';
import { IListResult, IListSlider, ISlider } from '../interfaces/slider.intefaces';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { }

  public listGenero: Genero[] = [];
  public listSliders: any[] = [];
  public PeliculasCategorias:Object = {};
  public listSlidersSection: any[] = [];
  private urlGenero = 'https://api.themoviedb.org/3/genre/movie/list';
  private urlMovieTop = 'https://api.themoviedb.org/3/movie/popular';
  public options:IApi = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMmQ4OTM5ODVmOWQyOWIzNWIwNjVmYjJhN2IxYzJjYiIsInN1YiI6IjY0YjIwZTQ4MTY4NGY3MDEwMWFlZTMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XN36YY4FBqHVzu4VSmM_ZyqjCplU1abPTb3tSypbxwo'
    }
  };

  async getGeneros(){
    this.http.get<any>(this.urlGenero, this.options )
    .subscribe((resp:ListGenero) =>{
      this.listGenero = resp.genres;
    })
  }

  async getMoviesTop(){
    this.http.get<any>(this.urlMovieTop, this.options )
    .subscribe((resp:IListResult) =>{
      this.listSliders = [];
      for (let i = 0; i < resp.results.length; i++) {
        const element:ISlider = {
          name:resp.results[i].original_title,
          descripcion:resp.results[i].overview,
          image:`https://image.tmdb.org/t/p/original${resp.results[i].backdrop_path}`,
          imagePoster:`https://image.tmdb.org/t/p/original${resp.results[i].poster_path}`
        }
        this.listSliders.push(element);
      }
    })
  }

  async getMoviesCategorias(){
    this.http.get<any>(this.urlMovieTop, this.options )
    .subscribe((resp:IListResult) =>{
      this.listSlidersSection = [];
      for (let i = 0; i < resp.results.length; i++) {
        for(let j=0; j < resp.results[i].genre_ids.length; j++){
          const generoID = resp.results[i].genre_ids[j];
          const finGenero = this.listGenero.find(g => generoID === g.id);
          const element:ISlider = {
            name:resp.results[i].original_title,
            descripcion:resp.results[i].overview,
            image:`https://image.tmdb.org/t/p/original${resp.results[i].backdrop_path}`,
            imagePoster:`https://image.tmdb.org/t/p/original${resp.results[i].poster_path}`,
            genero:finGenero?.name
          }
          this.listSlidersSection.push(element);
        }
      }
      this.PeliculasCategorias =  _.groupBy(this.listSlidersSection, 'genero');
    })
  }

 /* getGeneros(request : any): Observable<any[]> {
    return this.http.get(`${this.url}`, this.options).pipe(
      map(response => {
        console.log(response);
        });
      }
      )
    );
  }*/
}
