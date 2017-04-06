import { Component, OnInit } from '@angular/core';

import { Factory } from './factory';

@Component({
  selector: 'app-lighting-particles',
  templateUrl: './lighting-particles.component.html',
  styleUrls: ['./lighting-particles.component.css']
})
export class LightingParticlesComponent implements OnInit {


  canvas;
  ctx;
  particles = [];
  patriclesNum = 500;
  w = 500;
  h = 500;

  constructor() { }

  ngOnInit() {

    for (var i = 0; i < this.patriclesNum; i++) {
      this.particles.push(new Factory(this.w,this.h));
    }

    
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById('c');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = 500;
    this.canvas.height = 500;
    this.canvas.style.left = (window.innerWidth - 500) / 2 + 'px';

    if (window.innerHeight > 500)
      this.canvas.style.top = (window.innerHeight - 500) / 2 + 'px';


    this.draw();
    requestAnimationFrame(()=>this.draw)

  }

  findDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
  }

  loop()
  {
    this.draw();
    requestAnimationFrame(this.loop);
  }

  draw() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.ctx.globalCompositeOperation = 'lighter';

    for (var i = 0; i < this.patriclesNum; i++) {
      var temp = this.particles[i];
      var factor = 1;

      for (var j = 0; j < this.patriclesNum; j++) {

        var temp2 = this.particles[j];
        this.ctx.linewidth = 0.5;

        if (temp.rgba == temp2.rgba && this.findDistance(temp, temp2) < 50) {
          this.ctx.strokeStyle = temp.rgba;
          this.ctx.beginPath();
          this.ctx.moveTo(temp.x, temp.y);
          this.ctx.lineTo(temp2.x, temp2.y);
          this.ctx.stroke();
          factor++;
        }
      }


      this.ctx.fillStyle = temp.rgba;
      this.ctx.strokeStyle = temp.rgba;

      this.ctx.beginPath();
      this.ctx.arc(temp.x, temp.y, temp.rad * factor, 0, Math.PI * 2, true);
      this.ctx.fill();
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.arc(temp.x, temp.y, (temp.rad + 5) * factor, 0, Math.PI * 2, true);
      this.ctx.stroke();
      this.ctx.closePath();


      temp.x += temp.vx;
      temp.y += temp.vy;

      if (temp.x > this.w) temp.x = 0;
      if (temp.x < 0) temp.x = this.w;
      if (temp.y > this.h) temp.y = 0;
      if (temp.y < 0) temp.y = this.h;
    }
  }

  }
