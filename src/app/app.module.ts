import { routing } from '../app.roting';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GKCHeatMapComponent } from './GKCHeatMap/GKCHeatMap.component';
import { DebouceComponent } from './debouce/debouce.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';
import { WorldHelloComponentComponent } from './world-hello-component/world-hello-component.component';
import { CanvasClothComponent } from './canvas-cloth/canvas-cloth.component';
import { LightingParticlesComponent } from './lighting-particles/lighting-particles.component';
import { MotionGraphicComponent } from './motion-graphic/motion-graphic.component';
import { AsyncComponent } from './async/async.component';
import { AbstractCanvasComponent } from './abstract-canvas/abstract-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    GKCHeatMapComponent,
    DebouceComponent,
    DynamicComponentComponent,
    HelloWorldComponentComponent,
    WorldHelloComponentComponent,
    CanvasClothComponent,
    LightingParticlesComponent,
    MotionGraphicComponent,
    AsyncComponent,
    AbstractCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
