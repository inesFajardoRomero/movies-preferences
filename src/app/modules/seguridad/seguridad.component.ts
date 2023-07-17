import { Component, Input } from '@angular/core';
import { SeguridadService } from 'src/app/services/seguridad.service';

@Component({
  selector: 'module-seguridad',
  templateUrl: './seguridad.component.html',
  styleUrls: ['./seguridad.component.css']
})
export class SeguridadComponent {
  constructor(private seguridadService:SeguridadService){}

  @Input() rol: string = "";

  isAutorizado():boolean{
    if(this.rol){
      return this.seguridadService.obtenerRol() === this.rol;
    }
    else {
      return this.seguridadService.isLogueado()
    }
  }

  ngOnInit(){
    console.log("ddd")
  }
}
