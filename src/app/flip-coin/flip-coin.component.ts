import { Component, OnInit } from '@angular/core';
import { Sprite } from './../sprite';

@Component({
  selector: 'app-flip-coin',
  templateUrl: './flip-coin.component.html',
  styleUrls: ['./flip-coin.component.css']
})
export class FlipCoinComponent implements OnInit {
  title = 'app';

  canvas;
  ctx;
  logo;
  container;
  previousTimeframe = 5;
  animationId;
  coinAimationId;
  image;
  coin: Sprite;
  moon;
  earth;


  ngOnInit() {


  }




  stopAnimation() {
    cancelAnimationFrame(this.animationId);
    cancelAnimationFrame(this.coinAimationId);
  }

  startAnimation() {
    this.imageLoop();
    // this.coin.render();
    // this.loop();
  }


  imageLoop = () => {
    this.coin.update();
    this.coin.render();
    this.coinAimationId = requestAnimationFrame(this.imageLoop)
  }

  loop = () => {
    this.draw(this.previousTimeframe);
    // this.drawSun();
    this.animationId = requestAnimationFrame(this.loop)
  }

  ngAfterViewInit() {


    this.container = { x: 0, y: 0, width: 800, height: 800 };
    this.logo = { x: 100, y: 100, r: 100, vx: 6, vy: 15 };

    const coinImage = new Image();
    coinImage.src = './assets/images/logo8.png';


    this.moon = new Image();
    this.earth = new Image();

    this.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    this.canvas = <HTMLCanvasElement>document.getElementsByTagName('canvas')[0];
    this.ctx = this.canvas.getContext('2d');


    this.image = document.getElementById('source');

    this.coin = new Sprite({
      context: this.ctx,
      width: 355,
      height: 40,
      image: coinImage
    });





    // this.loop();

  }



  draw(time) {

    // const FPS = Math.floor(1000 / (time - this.previousTimeframe));
    // this.previousTimeframe = time;
    // console.log(FPS)
    // this.ctx.save();

    this.ctx.fillStyle = 'black';
    this.ctx.strokeStyle = 'black';
    this.ctx.clearRect(this.container.x, this.container.y, this.container.width, this.container.height);
    this.ctx.strokeRect(this.container.x, this.container.y, this.container.width, this.container.height);

    // this.ctx.save();
    this.ctx.fillStyle = 'red';
    this.ctx.beginPath();
    // this.ctx.arc(this.logo.x, this.logo.y, this.logo.r, 0, 2 * Math.PI, false);
    this.ctx.drawImage(
      this.image,
      0,
      0,
      100,
      100,
      0,
      0,
      100,
      100);
    this.ctx.fill();
    // this.ctx.save();

    // tslint:disable-next-line:max-line-length
    if ((this.logo.x + this.logo.vx + this.logo.r > this.container.x + this.container.width) || (this.logo.x - this.logo.r + this.logo.vx < this.container.x)) {
      this.logo.vx = -this.logo.vx;
    }
    // tslint:disable-next-line:max-line-length
    if ((this.logo.y + this.logo.vy + this.logo.r > this.container.y + this.container.height) || (this.logo.y - this.logo.r + this.logo.vy < this.container.y)) {
      this.logo.vy = -this.logo.vy;
    }

    this.logo.x += this.logo.vx;
    this.logo.y += this.logo.vy;


  }


  drawSun() {
    const ctx = this.ctx;


    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    ctx.save();
    ctx.translate(150, 150);

    // Earth
    const time = new Date();
    ctx.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 50, 24); // Shadow
    ctx.drawImage(this.earth, -12, -12);

    // Moon
    ctx.save();
    ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(this.moon, -3.5, -3.5);
    ctx.restore();

    ctx.restore();



  }

}
