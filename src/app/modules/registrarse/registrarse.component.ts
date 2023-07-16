import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI, LogupI } from 'src/app/interfaces/LoginInterface';
import { Genero } from 'src/app/interfaces/sidebar.interfaces';
import { ComponentService } from 'src/app/services/components.service';
//import { LoginService } from 'src/app/services/loginServices/login.service';

@Component({
  selector: 'module-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  public myForm:FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    correo: ['', Validators.required],
    password: ['', Validators.required],

  });

  constructor(private componentService:ComponentService,/*, private router:Router,*/ private fb:FormBuilder){
  }

  get listGenero():Genero[] {
    console.log( this.componentService.listGenero)
    return this.componentService.listGenero;
  }

  ngOnInit() {
    this.componentService.getGeneros();
  }

  onSubmit(form:LogupI){
  /*  this.http.register({email:form.correo, password:form.password})
    .then(response => {
      this.router.navigate(['login']);
    })
    .catch(error => console.log(error));*/
  }
}
