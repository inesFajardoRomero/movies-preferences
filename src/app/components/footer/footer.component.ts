import { Component } from '@angular/core';

@Component({
  selector: 'components-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  anio:Date = new Date();
}
