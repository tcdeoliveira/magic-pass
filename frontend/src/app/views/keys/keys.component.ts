import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit{

  @ViewChild('newContainer', { read: ViewContainerRef })
  newContainer!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector:Injector) {}

  ngOnInit(): void {
    
  }
  ngAfterViewInit() {}

  async openAddItemPopUp(){
    console.log('fsssdx')
    const {NewComponent} = await import ('./new/new.component')
    const newFactory = this.componentFactoryResolver.resolveComponentFactory(NewComponent)
    const {instance} = this.newContainer.createComponent(newFactory, undefined, this.injector)
  }
}