import { Body } from '@angular/http/src/body';
import { document } from '@angular/platform-browser/src/facade/browser';
import { Observable } from 'rxjs/Rx';
// import { $$observable } from 'rxjs/symbol/observable';
import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  HostListener,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

// declare let window:any;

@Component({
  selector: 'app-debouce',
   template: `
    <div [innerHTML]="str" #heatmapImage></div>
`,
  styleUrls: ['./debouce.component.css']
})
export class DebouceComponent implements OnInit {
  str1 = "<div class='item color-1'>Block 1</div>  <div class='item color-2'>Block 2</div>  <div class='item color-3'>Block 3</div>  <div class='item color-4'>Block 4</div>";

  str = "<div class='item color-1'>Block 1</div>  <div class='item color-2'>Block 2</div>  <div class='item color-3'>Block 3</div>  <div class='item color-4'>Block 4</div>";

  @ViewChild('heatmapImage') thisBody: ViewContainerRef;

  constructor(private _hostDomElement: ElementRef,
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _defaultInjector: Injector,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('resize')
  }

  ngOnInit() {
   

  }

  ngAfterViewInit() {
     Observable.fromEvent(window, 'scroll')
      .throttleTime(200)
      .subscribe(e => {
        //console.log('scroll')
        let pixelsFromWindowBottomToBottom: any;
        console.log('window.innerHeight-->' + window.innerHeight);
        console.log('document.height-->' + document.documentElement.clientHeight);
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        console.log('scrollTop-->' + scrollTop)
        // pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() -$(window).height();
        pixelsFromWindowBottomToBottom = 0 + document.documentElement.clientHeight - scrollTop -window.innerHeight;
        //  pixelsFromWindowBottomToBottom =  ;
        if (pixelsFromWindowBottomToBottom < 200) {
          // Here it would go an ajax request


          let item = document.getElementsByClassName('item')
          this.str = this.str + this.str1;

        }
      })

  }

}
