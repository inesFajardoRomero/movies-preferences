import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module')
      .then(m => m.ModulesModule),
  },

  { path: '', redirectTo: 'modules', pathMatch: 'full' },
  { path: '**', redirectTo: 'modules' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
