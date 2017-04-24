import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor() { }

  resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }

  async add1(x) {
    var a = this.resolveAfter2Seconds(20);
    var b = this.resolveAfter2Seconds(30);
    return x + await a + await b;
  }



  async add2(x) {
    var a = await this.resolveAfter2Seconds(20);
    var b = await this.resolveAfter2Seconds(30);
    return x + a + b;
  }





  ngOnInit() {

    this.add1(10).then(v => {
      console.log(v);  // prints 60 after 2 seconds.
    });


    this.add2(10).then(v => {
      console.log(v);  // prints 60 after 4 seconds.
    });

  }

}
