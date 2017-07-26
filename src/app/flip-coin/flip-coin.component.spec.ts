import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCoinComponent } from './flip-coin.component';

describe('FlipCoinComponent', () => {
  let component: FlipCoinComponent;
  let fixture: ComponentFixture<FlipCoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipCoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
