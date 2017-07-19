import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcss',
  templateUrl: './funcss.component.html',
  styleUrls: ['./funcss.component.css']
})
export class FuncssComponent implements OnInit {

  items: Object[] = [];

  title = 'app';
  str = '';
  differenceInPx = 25;

  ngOnInit()
  {

  }

  constructor() {

    let xNumber = 0;
    let yNumber = 0;

    for (let i = 1; i < 13; i++) {
      const item = {};
      item['id'] = i;

      // xNumber = xNumber + this.differenceInPx;
      // yNumber = yNumber + this.differenceInPx;


      // if (xNumber < this.differenceInPx * 3) {
      //   xNumber = xNumber + this.differenceInPx;
      // } else {
      //   xNumber = xNumber - this.differenceInPx;
      // }



      // if (yNumber <= this.differenceInPx * 6) {
      //   yNumber = yNumber + this.differenceInPx;
      // } else {
      //   yNumber = yNumber - this.differenceInPx;
      // }
      item['x'] = xNumber
      item['y'] = yNumber;
      this.items.push(item)
    }


  }


  resetAllValues() {
    for (let index = 1; index < 13; index++) {
      document.getElementById('hour' + index).innerHTML = '0';

    }
  }




  addItem() {

    this.resetAllValues();

    const inputText = document.getElementById('textA');
    const itemid = document.getElementById('hour1');


    if (this.str.length === 5) {
      let hour = parseInt(this.str.slice(0, 2), 10);
      let min = Math.floor(parseInt(this.str.slice(3, 5), 10) / 5);


      if (hour < 25 && min < 60) {
        if (min === 0) { min = 12 }

        if (hour === 0) {
          hour = 12;

        } else if (hour > 12) {
          hour = hour - 12;

        }


        if (hour === min) {
          document.getElementById('hour' + hour).innerHTML = 'x';
        } else {
          document.getElementById('hour' + hour).innerHTML = 'h';
          document.getElementById('hour' + min).innerHTML = 'm';
        }


      } else {
        console.log('error')
      }
    } else {
      console.log('error')
    }



  }

}
