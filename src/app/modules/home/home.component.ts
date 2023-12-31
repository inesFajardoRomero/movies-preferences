import { Component, ContentChild, TemplateRef } from '@angular/core';
import { IPeliculas } from 'src/app/interfaces/peliculas.interface';
import { ComponentService } from 'src/app/services/components.service';

@Component({
  selector: 'module-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private componentService: ComponentService) {
  }

  public objectKeys =  Object.keys;

  get listSlider():IPeliculas[] {
    return this.componentService.listSliders;
  }

  get CategoriaPeliculas():any {
    return this.componentService.PeliculasCategorias;
  }

  ngOnChanges() {
    this.componentService.getMoviesTop();
    this.componentService.getMoviesCategorias();
  }

  ngOnInit() {
    this.componentService.getMoviesTop();
    this.componentService.getMoviesCategorias();
  }
}
