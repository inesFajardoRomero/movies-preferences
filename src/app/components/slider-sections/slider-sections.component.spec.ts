import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSectionsComponent } from './slider-sections.component';

describe('SliderSectionsComponent', () => {
  let component: SliderSectionsComponent;
  let fixture: ComponentFixture<SliderSectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSectionsComponent]
    });
    fixture = TestBed.createComponent(SliderSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
