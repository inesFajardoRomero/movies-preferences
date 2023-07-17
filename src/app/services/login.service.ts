import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginResult, IRegister, LoginI } from '../interfaces/LoginInterface';
//import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "https://localhost:7189/api/Usuario";

  constructor(private http: HttpClient) { }

  register(form:IRegister){
    this.http.post<IRegister>(this.url + "/registrar", form )
    .subscribe((resp:IRegister) =>{
      ///this.listGenero = resp;
      console.log(resp)
    })
  }

  login(form:LoginI){
    return this.http.post<ILoginResult>(this.url + "/login", {usuario : form.nick, contrasena : form.password} );
  }

}
