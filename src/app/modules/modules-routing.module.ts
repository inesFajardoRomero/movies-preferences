import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { isLoggerGuard } from '../guards/is-logger.guard';


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
      path: 'recomendaciones',
      component: RecomendacionesComponent,
      canActivate : [isLoggerGuard]
    },
    {
      path: 'register',
      component: RegisterComponent,
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
