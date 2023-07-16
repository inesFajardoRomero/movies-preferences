export interface IListSlider {
  slider:ISlider[]
}

export interface IListResult {
  results:IResult[]
}

export interface IResult {
  original_title:string;
  overview:string;
  backdrop_path:string;
  poster_path:string;
  genre_ids:number[];
}

export interface ISlider {
  name:string;
  descripcion:string;
  image:string;
  imagePoster:string;
  genero?:string;
}
