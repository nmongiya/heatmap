import { Component, NgZone } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-zone-demo',
    template: ` <h2>Demo: NgZone</h2>
    <p>Progress: {{progress}}%</p>
    <p *ngIf="progress >= 100">Done processing {{label}} of Angular zone!</p>
    <button (click)="processWithinAngularZone()">Process within Angular zone</button>
    <button (click)="processOutsideOfAngularZone()">Process outside of Angular zone</button>
  `,
})

export class NgzoneComponent {
  progress: number = 0;
  label: string;
  constructor(private _ngZone: NgZone) { }
  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }


  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {

      this._increaseProgress( () => {

        this._ngZone.run( () => {  console.log('Outside Done!'); } );
      } );
    });
  }





  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);
    
    if (this.progress < 100) {
      window.setTimeout( () => this._increaseProgress(doneCallback) ,10);
      
    } else {
      doneCallback();
    }
  }
}
