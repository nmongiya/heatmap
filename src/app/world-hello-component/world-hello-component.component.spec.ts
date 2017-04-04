import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldHelloComponentComponent } from './world-hello-component.component';

describe('WorldHelloComponentComponent', () => {
  let component: WorldHelloComponentComponent;
  let fixture: ComponentFixture<WorldHelloComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldHelloComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldHelloComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
