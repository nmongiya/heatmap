import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-component',
  templateUrl: './hello-world-component.component.html',
  styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponentComponent implements OnInit {
 showNum = 0;

  constructor(private injector: Injector) { 
     this.showNum = this.injector.get('showNum');
  }

  ngOnInit() {

    
    
  }

}
