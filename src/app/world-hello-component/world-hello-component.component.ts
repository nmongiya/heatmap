import { Component, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-hello-component',
  templateUrl: './world-hello-component.component.html',
  styleUrls: ['./world-hello-component.component.css']
})
export class WorldHelloComponentComponent implements OnInit {

  constructor(private injector: Injector) { }

  ngOnInit() {
  }

}
