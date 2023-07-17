import { NgModule } from '@angular/core';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SliderComponent } from '../components/slider/slider.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonModule } from '@angular/common';
import { SliderSectionsComponent } from '../components/slider-sections/slider-sections.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SeguridadComponent } from './seguridad/seguridad.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';



@NgModule({
  imports: [
    ModulesRoutingModule,
    CommonModule,
    ReactiveFormsModule,
],
  declarations: [
    ModulesComponent,
    HomeComponent,
    SidebarComponent,
    SliderComponent,
    SliderSectionsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SeguridadComponent,
    RecomendacionesComponent
  ],
})
export class ModulesModule {
}
