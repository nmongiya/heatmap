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

@NgModule({
  declarations: [
    AppComponent,
    GKCHeatMapComponent,
    DebouceComponent,
    DynamicComponentComponent,
    HelloWorldComponentComponent,
    WorldHelloComponentComponent,
    CanvasClothComponent
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
