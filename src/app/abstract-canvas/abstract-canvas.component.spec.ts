import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractCanvasComponent } from './abstract-canvas.component';

describe('AbstractCanvasComponent', () => {
  let component: AbstractCanvasComponent;
  let fixture: ComponentFixture<AbstractCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
