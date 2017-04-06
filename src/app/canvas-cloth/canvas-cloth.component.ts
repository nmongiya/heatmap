import { Cloth } from '../cloth';
import { Mouse } from '../Mouse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-cloth',
  templateUrl: './canvas-cloth.component.html',
  styleUrls: ['./canvas-cloth.component.css']
})



export class CanvasClothComponent implements OnInit {

  canvas;
  ctx;
  cloth: Cloth;
  boundsx;
  boundsy;

  mouse: Mouse;
  physics_accuracy = 3;
  mouse_influence = 20;
  mouse_cut = 5;
  gravity = 1200;
  cloth_height = 30;
  cloth_width = 50;
  start_y = 20;
  spacing = 7;
  tear_distance = 60;



  constructor() {
    this.mouse = new Mouse();

    this.mouse.down = false;
    this.mouse.button = 1;
    this.mouse.x = 0;
    this.mouse.y = 0;
    this.mouse.px = 0;
    this.mouse.py = 0;


  }






  ngAfterViewInit() {

    this.canvas = document.getElementById('c');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = 560;
    this.canvas.height = 350;

    this.canvas.addEventListener('mousedown', this.canvasMouseDown.bind(this));
    this.canvas.addEventListener('onmouseup', this.canvasMouseUp.bind(this));
    this.canvas.addEventListener('mousemove', this.canvasMouseMove.bind(this));
    this.canvas.addEventListener('contextmenu', this.oncontextmenu.bind(this));

    this.start();
  }

  start() {
    this.boundsx = this.canvas.width - 1;
    this.boundsy = this.canvas.height - 1;

    this.ctx.strokeStyle = '#888';
    this.cloth = new Cloth(this.canvas, this.cloth_width, this.cloth_height, this.spacing, this.start_y);

    this.update();
  }

  update() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.cloth.update();
    this.cloth.draw();

    // requestAnimationFrame(()=>this.update);

    // requestAnimFrame(()=> this.update);
  }

  requestAnimFrame() {

  }

  oncontextmenu(e) {
    e.preventDefault();
  };




  canvasMouseMove(e) {
    this.mouse.px = this.mouse.x;
    this.mouse.py = this.mouse.y;
    var rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
    e.preventDefault();
  }

  canvasMouseUp(e) {
    this.mouse.down = false;
    e.preventDefault();

    // this.start();
  }

  canvasMouseDown(e) {
    //console.log(e);
    this.mouse.button = e.which;
    this.mouse.px = this.mouse.x;
    this.mouse.py = this.mouse.y;
    var rect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - rect.left;
    this.mouse.y = e.clientY - rect.top;
    this.mouse.down = true;
    e.preventDefault();
  }

  ngOnInit() {
  }

}
