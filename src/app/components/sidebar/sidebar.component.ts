import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Genero } from 'src/app/interfaces/sidebar.interfaces';

@Component({
  selector: 'components-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input()
  listaGenero: Genero[] = [];

  constructor(private router:Router){

  }
  public generoPeliculas: Genero[]= [];

  accederLogin(){
    this.router.navigate(['modules/login']);
  }

  ngOnChanges(){
    this.generoPeliculas = this.listaGenero;
  }
}
