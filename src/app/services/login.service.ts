import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from 'src/app/interfaces/LoginInterface';
//import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://10.10.40.121:3001/print?url=https://www.grupobynsa.com/blog/los-blogs-de-mascotas-que-debes-seguir-si-te-gustan-los-animales/";

 // constructor(private http:HttpClient, private auth:Auth){

  //}

  // register({email, password}:any){
  //  // return createUserWithEmailAndPassword(this.auth, email, password)
  // }

  // ingresarLogin({email, password}:any){
  //  // return signInWithEmailAndPassword(this.auth, email, password);
  // }
}
