import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GKCHeatMapComponent } from './GKCHeatMap.component';

describe('FirstComponentComponent', () => {
  let component: GKCHeatMapComponent;
  let fixture: ComponentFixture<GKCHeatMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GKCHeatMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GKCHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
