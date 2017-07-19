import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncssComponent } from './funcss.component';

describe('FuncssComponent', () => {
  let component: FuncssComponent;
  let fixture: ComponentFixture<FuncssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
