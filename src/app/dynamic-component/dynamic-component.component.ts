import {
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ReflectiveInjector,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { HelloWorldComponentComponent } from './../hello-world-component/hello-world-component.component';
import { WorldHelloComponentComponent } from './../world-hello-component/world-hello-component.component';

@Component({
  selector: 'app-dynamic-component',
  entryComponents: [HelloWorldComponentComponent, WorldHelloComponentComponent],
  templateUrl: './dynamic-component.component.html',

})
export class DynamicComponentComponent implements OnInit {

  currentComponent = null;

  @ViewChild('dynamicComponentContainer') dynamicComponentContainer: ViewContainerRef;

  @Input()
  set componentData(data: { component: any, inputs: any }) {
    if (!data) {
      return;
    }

    this.loadComponent(data.component);

    // let inputProviders = Object.keys(data.inputs).map((inputName) => {
    //   return { provide: inputName, useValue: data.inputs[inputName] };
    // });

    // let resolvedInputs = ReflectiveInjector.resolve(inputProviders);
 
    // let injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.dynamicComponentContainer.parentInjector);
  
    // let factory = this.resolver.resolveComponentFactory(data.component);
  
    // let component = factory.create(injector);

    // this.dynamicComponentContainer.insert(component.hostView);

    // if (this.currentComponent) {
    //   this.currentComponent.destroy();
    // }

    // this.currentComponent = component;
  }

  loadComponent(component:any) {
    let componentFactory = this.resolver.resolveComponentFactory(component);
    let viewContainerRef = this.dynamicComponentContainer;
    //viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);

  }

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

}
