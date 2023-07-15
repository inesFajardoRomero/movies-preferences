import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/components.service';

@Component({
  selector: 'module-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private componentService: ComponentService) {
  }

  get listSlider():any[] {
    return this.componentService.listSliders;
  }

  ngOnInit() {
    this.componentService.getMoviesTop();
  }
}
