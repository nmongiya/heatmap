import { CanvasClothComponent } from './app/canvas-cloth/canvas-cloth.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { GKCHeatMapComponent } from './app/GKCHeatMap/GKCHeatMap.component';
import { LightingParticlesComponent } from './app/lighting-particles/lighting-particles.component';
import { MotionGraphicComponent } from './app/motion-graphic/motion-graphic.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/app-first-component', pathMatch: 'full' },
    { path: 'app-first-component', component: GKCHeatMapComponent },
    { path: 'tearable', component: CanvasClothComponent },
    { path: 'particle', component: LightingParticlesComponent },
    { path: 'motion', component: MotionGraphicComponent },
    
];

export const appRoutingProviders: any[] = [

];



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
