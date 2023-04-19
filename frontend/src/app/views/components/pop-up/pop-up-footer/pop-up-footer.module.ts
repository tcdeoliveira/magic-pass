import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopUpFooterComponent } from './pop-up-footer.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PopUpFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PopUpFooterComponent
  ],
})
export class PopUpFooterModule { }
