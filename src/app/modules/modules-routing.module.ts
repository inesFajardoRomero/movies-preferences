import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';


const routes: Routes = [{
  path: '',
  component: ModulesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'register',
      component: RegistrarseComponent,
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ModulesRoutingModule {

}
