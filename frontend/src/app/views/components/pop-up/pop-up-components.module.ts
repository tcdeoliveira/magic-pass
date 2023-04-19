import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up.component';
import { PopUpContentModule } from './pop-up-content/pop-up-content.module';
import { PopUpFooterModule } from './pop-up-footer/pop-up-footer.module';
import { PopUpHeaderModule } from './pop-up-header/pop-up-header.module';
import { PopUpModule } from './pop-up.module';



@NgModule({
  imports: [
    CommonModule,
    PopUpModule,
    PopUpContentModule,
    PopUpFooterModule,
    PopUpHeaderModule
  ],
  exports:[
    PopUpComponent,
    PopUpModule,
    PopUpContentModule,
    PopUpFooterModule,
    PopUpHeaderModule
  ]
})
export class PopUpComponentsModule { }
