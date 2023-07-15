import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component: ModulesComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
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
