import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginI } from 'src/app/interfaces/LoginInterface';
import { LoginService } from 'src/app/services/login.service';


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
  constructor(private http: LoginService, private router: Router, private fb: FormBuilder) {

  }

  ingresar(form: LoginI) {
    /*this.http.ingresarLogin({ email: form.nick, password: form.password })
      .then((data: any) => {
        this.router.navigate(['home']);
      }).catch((error:any) => {
        alert(error.error.message);
      });*/
  }
}
