import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasClothComponent } from './canvas-cloth.component';

describe('CanvasClothComponent', () => {
  let component: CanvasClothComponent;
  let fixture: ComponentFixture<CanvasClothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasClothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
