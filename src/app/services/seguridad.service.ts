import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private llaveToken = "token";

  constructor() { }

  isLogueado():boolean{

    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return false;
    }
    return true;
  }

  obtenerRol() : string {

    const rol = this.obtenerLlaveJWT("rol");
    return rol;
  }

  obtenerLlaveJWT(campo :string){
    const token = localStorage.getItem(this.llaveToken);

    if(!token){
      return "";
    }

    var dataToken = JSON.parse(atob(token.split(".")[1]))
    return dataToken[campo];
  }

  logout(){
    localStorage.removeItem(this.llaveToken);
  }

  guardarToken(token : string){
    localStorage.setItem(this.llaveToken,token)
  }
}
