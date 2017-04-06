import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightingParticlesComponent } from './lighting-particles.component';

describe('LightingParticlesComponent', () => {
  let component: LightingParticlesComponent;
  let fixture: ComponentFixture<LightingParticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightingParticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightingParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
