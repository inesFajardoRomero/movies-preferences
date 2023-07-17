import { Component } from '@angular/core';
import { ComponentService } from '../services/components.service';
import { IGenero } from '../interfaces/genero.interfaces'

@Component({
  selector: 'module-modules',
  template: `
    <components-sidebar [listaGenero]="listGenero"></components-sidebar>
    <router-outlet></router-outlet>
    <components-footer></components-footer>

  `,
})
export class ModulesComponent {
  constructor(private componentService: ComponentService) {
  }

  get listGenero():IGenero[] {
    return this.componentService.listGenero;
  }

  ngOnChanges() {
    this.componentService.getGeneros();
  }

  ngOnInit() {
    this.componentService.getGeneros();
  }
}
