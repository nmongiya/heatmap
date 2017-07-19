import { routing } from '../app.roting';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

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
import { MultiselectComponent } from './multiselect/multiselect.component';
import { FilterPip } from './filter-pipe.pipe';
import { NgzoneComponent } from './ngzone/ngzone.component';
import { FuncssComponent } from './funcss/funcss.component';

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
    AbstractCanvasComponent,
    MultiselectComponent,
    FilterPip,
    NgzoneComponent,
    FuncssComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // MultiselectDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
