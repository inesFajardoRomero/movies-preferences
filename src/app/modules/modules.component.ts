import { Component } from '@angular/core';
import { ComponentService } from '../services/components.service';
import { Genero } from '../interfaces/sidebar.interfaces';

@Component({
  selector: 'module-modules',
  template: `
    <components-sidebar [listaGenero]="listGenero"></components-sidebar>
    <router-outlet></router-outlet>
  `,
})
export class ModulesComponent {
  constructor(private componentService: ComponentService) {
  }

  get listGenero():Genero[] {
    return this.componentService.listGenero;
  }

  ngOnInit() {
    this.componentService.getGeneros();
  }
}
