import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister, IUsuarioGenero, LoginI, LogupI } from 'src/app/interfaces/loginInterface';
import { IGenero } from 'src/app/interfaces/genero.interfaces';
import { ComponentService } from 'src/app/services/components.service';
import { LoginService } from 'src/app/services/login.service';
//import { LoginService } from 'src/app/services/loginServices/login.service';

@Component({
  selector: 'module-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public myForm!: FormGroup;
  public usuarioGenero: IUsuarioGenero[] = [];
  public isPreferencias: boolean = false;
  constructor(private componentService: ComponentService, private loginService: LoginService, private router:Router, private fb: FormBuilder) {
  }


  get listGenero(): IGenero[] {
    return this.componentService.listGenero;
  }

  onChecked(e: any) {
    if (e.target.checked) {
      this.usuarioGenero.push({
        generoId: Number(e.target.value)
      })
    } else {
      this.usuarioGenero = this.usuarioGenero.filter(x => x.generoId !== Number(e.target.value));
    }
    if(!this.usuarioGenero.length) {
      this.isPreferencias = true;
    }else{
      this.isPreferencias = false;
    }
  }

  ngOnInit() {
    this.componentService.getGeneros();
    this.myForm = this.initForm();
  }

  onSubmit(form: IRegister) {
    const isInValid = this.validarCampos(form);
    if(this.usuarioGenero.length < 0) {
      this.isPreferencias = true;
    }
    if(!isInValid && !this.isPreferencias){
      this.loginService.register({...form, usuarioGenero:this.usuarioGenero});
      this.router.navigate(['modules/login']);
      console.log({...form, usuarioGenero:this.usuarioGenero});
    }





      /*.then(response => {
        this.router.navigate(['login']);
      })
      .catch(error => console.log(error));*/
  }

  validarCampos(form:IRegister):boolean{
    for(let [key, value] of Object.entries(form)){
      if(value === '') return true;
    }
    return false;
  }

  initForm(): FormGroup {
    return this.fb.group({
      usuario: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],

    });
  }
}
