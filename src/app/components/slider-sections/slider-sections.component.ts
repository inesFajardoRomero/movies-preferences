import { Component, Input } from '@angular/core';

@Component({
  selector: 'components-slider-sections',
  templateUrl: './slider-sections.component.html',
  styleUrls: ['./slider-sections.component.css']
})
export class SliderSectionsComponent {
  @Input() slideSectionList:any = [];
  @Input() id:string = "";

  slides: any = [[]];

  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


  ngOnChanges(){
    this.slides = this.chunk(this.slideSectionList, 4);
  }

  ngOnInit() {

  }
}
