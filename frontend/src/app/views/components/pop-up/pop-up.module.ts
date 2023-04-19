import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpComponent } from './pop-up.component';
import { PopUpComponentsModule } from './pop-up-components.module';
import { PopUpContentModule } from './pop-up-content/pop-up-content.module';
import { PopUpHeaderModule } from './pop-up-header/pop-up-header.module';
import { PopUpFooterModule } from './pop-up-footer/pop-up-footer.module';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    PopUpComponent
  ],
  imports: [
    CommonModule,
    PopUpContentModule,
    PopUpFooterModule,
    PopUpHeaderModule,
    //Angular Material Modules
    MatButtonModule,
    FontAwesomeModule
  ],
  exports:[
    PopUpComponent
  ]
})
export class PopUpModule { }
