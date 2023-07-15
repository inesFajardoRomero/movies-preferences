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
}

export interface ISlider {
  name:string;
  descripcion:string;
  image:string;
}
