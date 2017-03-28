import { RGB } from '../utils/RGB';
import { document } from '@angular/platform-browser/src/facade/browser';
import { Component, Input, OnInit } from '@angular/core';
declare let createjs: any;
@Component({
  selector: 'gkc-heatmap',
  templateUrl: './GKCHeatMap.component.html'
 
})
export class GKCHeatMapComponent implements OnInit {

  constructor() { }

  private _heatMapData: any;
  private _heatMapCategory: any = 'Temperature';

  mapImage: any;
  _xs = [];
  _ys = [];
  _f = [];
  numDataPoints = 10;
  tarr = [0.8, 0.9, 0.5, 0.2, 0.6, 0.4, 0.2, 0.8, 0.7, 0.8, 0.9, 0.5, 0.2, 0.6, 0.4, 0.2, 0.8, 0.7];
  BM_WIDTH = 400;
  BM_HEIGHT = 400;
  currentCOunt = 3;
  minMaxObj = { 'diff': 6.19, 'max': 24.49, 'min': 18.30 };
  refreshHeatMap: Boolean = false;
  NUM_COLORS: number = 4;
  color = [[0, 0, 255], [0, 255, 0], [255, 255, 0], [255, 0, 0]];
  stage: any;
  myShape: any;


  public get imageHeight(): number {
    return this._imageHeight;
  }

  @Input()
  public set imageHeight(value: number) {
    this._imageHeight = value;
    this.BM_HEIGHT = value;
   
    
    
    this.drawHeatMap();
  }
  private _imageHeight: number;



  public get imageWidth(): number {
    return this._imageWidth;
  }
  @Input()
  public set imageWidth(value: number) {
    this._imageWidth = value;
    this.BM_WIDTH = value;

 
    
    //document.getElementById('heatmapContainer').style.width = value + 'px';
    this.drawHeatMap();


  }
  private _imageWidth: number;

  @Input()
  set heatMapCategory(heatMapCategory: any) {
    this._heatMapCategory = heatMapCategory;
    this.drawHeatMap();
  }
  get heatMapCategory(): any
  { return this._heatMapCategory };

  @Input()
  set heatMapData(heatmap: any) {
    this._heatMapData = heatmap;
    this.drawHeatMap();
    //console.log('set heatmapdata');

    //this.drawSampleHeatMap();
  }

  get heatMapData(): any
  { return this._heatMapData };

  drawHeatMap() {
    if (this._heatMapData !== undefined && this._heatMapData !== null && this._heatMapData.length > 0 && this._heatMapCategory != "" && this._heatMapCategory && this.BM_HEIGHT > 0 && this.BM_WIDTH > 0) {
      //graphics.clear();
      //refreshHeatMap = false;
      //document.getElementById('demoCanvas').setAttribute('style', 'display:block;width:' + this.BM_WIDTH + 'px;' + 'height:' + this.BM_HEIGHT + 'px');
      this.setup('Temperature');
    }
  }

  setup(measure: String): void {
    if (this._heatMapData && this._heatMapData.length > 0) {
      this._xs = [];
      this._ys = [];
      this._f = [];
      let yTemp: number = 50;
      let i: number = 0;

      this._heatMapData.forEach(hmObj => {
        this._xs[i] = hmObj.x//250//Math.random()*BM_WIDTH;
        this._ys[i] = hmObj.y;//Math.random()*BM_HEIGHT;
        //harcoding it for now
        this._f[i] = 1 - (Math.abs(hmObj[measure.split(" ").join("_")] - this.minMaxObj['max']) / this.minMaxObj['diff']);
        i++;
      });



      this.makeHeatMap();
    }

  }

  makeHeatMap(): any {
    //var timg: BitmapData = new BitmapData(this.BM_WIDTH, this.BM_HEIGHT, true);


    let userCanvas = document.getElementById('demoCanvas');
    //let ctx = userCanvas.getContext('2d');
    //let imageData = ctx.getImageData(0, 0, userCanvas.width, userCanvas.height);
    //let timg = imageData.data;


    this.stage = new createjs.Stage(userCanvas);

    this.myShape = new createjs.Shape();



    var maxDIst: number = Math.sqrt((this.BM_WIDTH * this.BM_WIDTH) + (this.BM_HEIGHT * this.BM_HEIGHT));
    var heats = [];
    var x: number = 0;
    var y: number = 0;
    var count: number = 0;

    while (y < this.BM_HEIGHT && x < this.BM_WIDTH) {
      var _hue: number = this.getInterpValue(x, y, this._xs, this._ys, this._f);
      if (isNaN(_hue)) {
        x = x + 7;
        if (x >= this.BM_WIDTH) {
          x = 0;
          y = y + 7;

        }
        continue;

      }
      var aColor: any = this.getHeatMapColor(_hue)//(new RGB(255,255-(255*_hue),255)).Hex;

      //this.drawSampleHeatMap();
      //timg.setPixel(x, y, aColor);


      let myShape = new createjs.Shape();

      myShape.graphics.beginFill(aColor);
      myShape.graphics.drawRect(x, y, 7, 7);
      myShape.graphics.endFill();
      this.stage.addChild(myShape);
      // this.stage.update();

      x = x + 7;



      if (x >= this.BM_WIDTH) {
        x = 0;
        y = y + 7;

      }

      count++;

    }

    this.stage.update();

    console.log(count);

    // this.myShape.graphics.beginFill('red');
    // this.myShape.graphics.drawRect(x, y, 300, 300);
    // this.myShape.graphics.endFill();
    // this.stage.addChild(this.myShape);
    // this.stage.update();




    //return timg;
  }

  getHeatMapColor(value: number): any {

    // A static array of 4 colors:  (blue,   green,  yellow,  red) using {r,g,b} for each.

    var idx1: number;        // |-- Our desired color will be between these two indexes in "color".
    var idx2: number;        // |
    var fractBetween: number = 0;  // Fraction between "idx1" and "idx2" where our value is.

    if (value <= 0) { idx1 = idx2 = 0; }    // accounts for an input <=0
    else if (value >= 1) { idx1 = idx2 = this.NUM_COLORS - 1; }    // accounts for an input >=0
    else {
      value = value * (this.NUM_COLORS - 1);        // Will multiply value by 3.
      idx1 = Math.floor(value);                  // Our desired color will be after this index.
      idx2 = idx1 + 1;                        // ... and before this index (inclusive).
      fractBetween = value - (idx1);    // Distance between the two indexes (0-1).
    }
    var red: number = (this.color[idx2][0] - this.color[idx1][0]) * fractBetween + this.color[idx1][0];
    var green: number = (this.color[idx2][1] - this.color[idx1][1]) * fractBetween + this.color[idx1][1];
    var blue: number = (this.color[idx2][2] - this.color[idx1][2]) * fractBetween + this.color[idx1][2];

    let rgb = createjs.Graphics.getRGB(red, green, blue);

    rgb = rgb.substring(4, rgb.length - 1)
      .replace(/ /g, '')
      .split(',');

    let retunColor = this.rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]));
    //return ( RGB.RGB(red, green, blue)).Hex();
    return retunColor;


  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  getInterpValue(x: number, y: number, xs: any, ys: any, f: any): number {
    var interpValue: number = 0;
    var maxDist: number = this.getMaxDistanceFromPoint(x, y, xs, ys);
    var allDistances = this.getAllDistancesFromPoint(x, y, xs, ys);

    for (var i: number = 0; i < xs.length; i++) {
      let thisDistance: number = this.dist(x, y, xs[i], ys[i]);
      let weight: number = this.getWeight(maxDist, thisDistance, allDistances);
      let multiplier = f[i];
      interpValue += multiplier * weight;
    }
    if (isNaN(interpValue)) {
    }
    return interpValue;
  }

  getMaxDistanceFromPoint(x: number, y: number, xs: any, ys: any): number {
    var maxDistance: number = 0;
    for (var i: number = 0; i < xs.length; i++) {
      var thisDist: number = this.dist(x, y, xs[i], ys[i]);
      //if this distance is greater than previous distances, this is the new max
      if (thisDist > maxDistance) {
        maxDistance = thisDist;
      }
    }
    if (isNaN(maxDistance)) {
    }
    return maxDistance;
  }

  getAllDistancesFromPoint(x: number, y: number, xs: any, ys: any): any {
    var allDistances: any = []//float [xs.length];
    for (var i: number = 0; i < xs.length; i++) {
      allDistances[i] = this.dist(x, y, xs[i], ys[i]);
    }

    return allDistances;
  }

  dist(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }

  getWeight(maxDistance: number, thisDistance: number, allDistances: any): number {
    if (thisDistance == 0) {
      this.currentCOunt++;
      return 1;

    }
    var weight: number = 0;
    var firstTerm: number = Math.pow(((maxDistance - thisDistance) / (maxDistance * thisDistance)), 4);
    var secondTerm: number = 0;
    for (var i: number = 0; i < allDistances.length; i++) {
      secondTerm += Math.pow(((maxDistance - allDistances[i]) / (maxDistance * allDistances[i])), 4);
    }
    weight = firstTerm / secondTerm;
    if (isNaN(weight)) {
      return 0;
    }
    return weight;
  }




  ngAfterViewInit() {

  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  getRandomColorBetween2ranges() {
    let rgb1 = this.rgb("#0000FF");
    let rgb2 = this.rgb("#FF0000");
    let rgb3 = [];
    for (var i = 0; i < 3; i++) {
      rgb3[i] = rgb1[i] + Math.random() * (rgb2[i] - rgb1[i]) | 0;
    }
    let newColor = '#' + rgb3
      .map(function (n) { return n.toString(16) })
      .map(function (s) { return "00".slice(s.length) + s }).join('');

    return newColor;
  }


  // 
  // 
  // 
  // 



  drawSampleHeatMap() {
    let userCanvas = document.getElementById('demoCanvas');

    this.stage = new createjs.Stage(userCanvas);

    //let numarr = [0.44343613595403925,0.44328204517337033,0.4431584002232071,0.4430618512352005];
    let numarr = ['blue', 'green', 'yellow', 'red'];

    var x: number = 0;
    var y: number = 0;
    while (y < 400 && x < 400) {
      x = x + 7;

      if (x >= 300) {
        x = 0;
        y = y + 7;

      }


      let myShape = new createjs.Shape();
      //myShape.graphics.beginFill(this.getRandomColorBetween2ranges()).drawRect(0, 0, 10, 10);
      //"rgb(0,3.4084735296143753,251.59152647038562)"
      myShape.graphics.beginFill("rgb(0,3.4084735296143753,251.59152647038562)").drawRect(0, 0, 10, 10);
      //myShape.graphics.beginFill(numarr[Math.floor(Math.random() * 4)]).drawRect(0, 0, 10, 10);
      myShape.x = x;
      myShape.y = y;
      myShape.alpha = Math.random();
      this.stage.addChild(myShape);
    }


    // for (var index = 0; index < 300; index++) {
    //   let myShape = new createjs.Shape();
    //   myShape.graphics.beginFill(this.getRandomColorBetween2ranges()).drawCircle(0, 0, Math.random() * 30);
    //   myShape.x = x;
    //   myShape.y = y;
    //   myShape.alpha = Math.random();
    //   this.stage.addChild(myShape);

    // }

    this.stage.update();
  }

  rgb(string) {
    return string.match(/\w\w/g).map(function (b) { return parseInt(b, 16) })
  }

  ngOnInit() {
    //this.drawSampleHeatMap();

    // this.minMaxObj['diff'] = 6.19;
    // this.minMaxObj['max'] = 24.49;
    // this.minMaxObj['min'] = 18.30;


  }

}
