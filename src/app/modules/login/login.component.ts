import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/interfaces/LoginInterface';
import { LoginService } from 'src/app/services/login.service';
import { SeguridadService } from 'src/app/services/seguridad.service';
@Component({
  selector: 'module-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  iniciarSesion = new FormGroup({
    nick: new FormControl(''),
    password: new FormControl(''),
  });

  public myForm: FormGroup = this.fb.group({
    nick: ['', Validators.required],
    password: ['', Validators.required],
  });
  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder,
    private seguridadService : SeguridadService) {

  }

  ingresar(form: LoginI) {
    this.loginService.login(form).subscribe(respuesta => {

      this.seguridadService.guardarToken(respuesta.token);
      this.router.navigate(["/modules/home"]);
    },(error: HttpErrorResponse) => {
        alert("Inicio de sesion incorrecto")
    });

  }
}
