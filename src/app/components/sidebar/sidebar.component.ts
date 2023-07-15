import { Component, Input } from '@angular/core';
import { Genero } from 'src/app/interfaces/sidebar.interfaces';

@Component({
  selector: 'components-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  listaGenero: Genero[] = [];

  public generoPeliculas: Genero[]= [];

  ngOnChanges(){
    this.generoPeliculas = this.listaGenero;
  }
}
