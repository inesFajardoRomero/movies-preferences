import { Component, Input } from '@angular/core';
import { ComponentService } from 'src/app/services/components.service';

@Component({
  selector: 'components-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() slideList:any = []


 /* get listGenero():Genero[] {
    return this.componentService.listGenero;
  }*/


}
