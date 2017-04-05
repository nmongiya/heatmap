import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-cloth',
  templateUrl: './canvas-cloth.component.html',
  styleUrls: ['./canvas-cloth.component.css']
})
export class CanvasClothComponent implements OnInit {

  constructor() { }

  canvas;
  ctx;
  cloth;
  boundsx;
  boundsy;
  mouse = {
    down: false,
    button: 1,
    x: 0,
    y: 0,
    px: 0,
    py: 0
  };
  Point = function (x, y) {

    this.x = x;
    this.y = y;
    this.px = x;
    this.py = y;
    this.vx = 0;
    this.vy = 0;
    this.pin_x = null;
    this.pin_y = null;

    this.constraints = [];
  };

  ngAfterViewInit() {

    this.canvas = document.getElementById('c');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = 560;
    this.canvas.height = 350;

    this.canvas.addEventListener('click', this.canvasMouseDown);

    //this.start();
  }

  canvasMouseDown(){
    console.log('mouseDown')
  }

  ngOnInit() {
  }

}
