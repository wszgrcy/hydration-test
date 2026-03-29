import {
  Directive,
  inject,
  Injector,
  input,
  signal,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { WrapperCmp } from './wrapper/wrapper';

@Directive({
  selector: '[appWrapper]',
})
export class Wrapper {
  tempRef = input.required<TemplateRef<any>>();
  viewRef = inject(ViewContainerRef);
  ngOnInit(): void {
    this.create();
  }
  create() {
    let injector = signal<Injector | undefined>(undefined);
    let ref = this.tempRef().createEmbeddedView({ value$: injector });
    let compRef = this.viewRef.createComponent(WrapperCmp, { projectableNodes: [ref.rootNodes] });
    injector.set(compRef.injector);
  }
}
