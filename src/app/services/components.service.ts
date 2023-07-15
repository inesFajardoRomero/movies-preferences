
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IApi } from '../interfaces/api.interfaces';
import { Genero, ListGenero } from '../interfaces/sidebar.interfaces';
import { IListResult, IListSlider, ISlider } from '../interfaces/slider.intefaces';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) { }

  public listGenero: Genero[] = [];
  public listSliders: any[] = [];
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
          image:`https://image.tmdb.org/t/p/original${resp.results[i].backdrop_path}`
        }
        this.listSliders.push(element);
      }
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
