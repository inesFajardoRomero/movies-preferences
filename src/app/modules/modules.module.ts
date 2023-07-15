import { NgModule } from '@angular/core';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SliderComponent } from '../components/slider/slider.component';
import { ModulesRoutingModule } from './modules-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ModulesRoutingModule,
    CommonModule,
],
  declarations: [
    ModulesComponent,
    HomeComponent,
    SidebarComponent,
    SliderComponent


  ],
})
export class ModulesModule {
}
