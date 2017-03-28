import { document } from '@angular/platform-browser/src/facade/browser';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeatMapVO } from './vo/HeatMapVO';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  title = 'app works!';

  private _heatMapData = [];

 __defaultMeasure;

  ngOnInit() {

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

    this.__defaultMeasure =  'Temperature';

  }
}


