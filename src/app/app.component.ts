import { ObservableInput } from 'rxjs/Observable';
import { document } from '@angular/platform-browser/src/facade/browser';
import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeatMapVO } from './vo/HeatMapVO';
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';
import { WorldHelloComponentComponent } from './world-hello-component/world-hello-component.component';
import { Observable, Subscription } from 'rxjs/Rx';

declare var LoremIpsum: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})



export class AppComponent implements OnInit {
  title = 'app works!';
  public items: Observable<Array<any>>;
  public _selectedItems: Array<any> = [];
  public watchedItems: Array<any>;
  private _items: Array<any>;
  private _lipsum: any;

  private _heatMapData = [];
  componentData = null;

  __defaultMeasure;


  constructor(private changeRef: ChangeDetectorRef, private appRef: ApplicationRef) {

    this._lipsum = new LoremIpsum();
    this._items = [];
    this.items = Observable.of(this._items);
    this.items.subscribe(res => { console.log("Items changed"); this.watchedItems = res; });
  }


  get selectedItems(): any {
    return this._selectedItems;
  };

  createItems() {
    this._items.length = 0;
    var max: number = 20;
    var min: number = 10;
    var numItems: number = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("Adding " + numItems.toString() + " items");
    max = 6;
    min = 3;
    var i: number;
    for (i = 0; i < numItems; i++) {
      var numWords: number = Math.floor(Math.random() * (max - min + 1)) + min;
      var label: string = this._lipsum.generate(numWords);
      this._items.push({ label: label, value: i.toString() });
      console.log(label);
    }

    // Randomly choose a few items
    this.randomSelect();
  }

  randomSelect() {
    var numItems: number = this.getRandomInt(0, this._items.length) + 1;
    var min: number = 0;
    var max: number = this._items.length - 1;
    var toSelectIndexes: Array<number> = [];
    for (var j: number = 0; j < this.getRandomInt(1, numItems); j++) {
      var randIndex: number = this.getRandomInt(min, max);
      var arrIndex = toSelectIndexes.indexOf(randIndex);
      if (arrIndex == -1) {
        toSelectIndexes.push(randIndex);
        this._selectedItems.push(this._items[randIndex]);
      }
    }
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  createHelloWorldComponent() {
    this.componentData = {
      component: HelloWorldComponentComponent,
      inputs: {
        showNum: 9
      }
    };
  }

  createWorldHelloComponent() {
    this.componentData = {
      component: WorldHelloComponentComponent,
      inputs: {
        showNum: 2
      }
    };
  }

  ngOnInit() {



    this.createItems();

    let _heatMapDataVO: HeatMapVO = new HeatMapVO();
    _heatMapDataVO.x = 132;
    _heatMapDataVO.y = 69;
    _heatMapDataVO.Temperature = 19.07;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 781;
    _heatMapDataVO.y = 266;
    _heatMapDataVO.Temperature = 20.48;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 466;
    _heatMapDataVO.y = 87;
    _heatMapDataVO.Temperature = 22.1974;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 379;
    _heatMapDataVO.y = 152;
    _heatMapDataVO.Temperature = 19.6138;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 134;
    _heatMapDataVO.y = 354;
    _heatMapDataVO.Temperature = 19.1986;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 253;
    _heatMapDataVO.y = 632;
    _heatMapDataVO.Temperature = 20.4366;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 670;
    _heatMapDataVO.y = 587;
    _heatMapDataVO.Temperature = 18.31;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 447;
    _heatMapDataVO.y = 211;
    _heatMapDataVO.Temperature = 21.61;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 363;
    _heatMapDataVO.y = 419;
    _heatMapDataVO.Temperature = 22.84;
    this._heatMapData.push(_heatMapDataVO);

    _heatMapDataVO = new HeatMapVO();
    _heatMapDataVO.x = 531;
    _heatMapDataVO.y = 455;
    _heatMapDataVO.Temperature = 18.26;
    this._heatMapData.push(_heatMapDataVO);

    this.__defaultMeasure = 'Temperature';

  }
}


