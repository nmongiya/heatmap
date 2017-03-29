import { routing } from '../app.roting';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GKCHeatMapComponent } from './GKCHeatMap/GKCHeatMap.component';
import { DebouceComponent } from './debouce/debouce.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

@NgModule({
  declarations: [
    AppComponent,
    GKCHeatMapComponent,
    DebouceComponent,
    DynamicComponentComponent
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
