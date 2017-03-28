import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebouceComponent } from './debouce.component';

describe('DebouceComponent', () => {
  let component: DebouceComponent;
  let fixture: ComponentFixture<DebouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
