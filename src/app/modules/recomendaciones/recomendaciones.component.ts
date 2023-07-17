import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/components.service';

@Component({
  selector: 'module-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent {

  public objectKeys =  Object.keys;

  constructor(private componentService: ComponentService) {
  }
  get CategoriaPeliculas():any {
    return this.componentService.PeliculasCategoriasRecomendas;
  }

  ngOnInit() {
    console.log("DDD")
    this.componentService.getMoviesTop();
    this.componentService.getMoviesRecomendadas();
  }
}
