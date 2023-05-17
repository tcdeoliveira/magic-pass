import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeysRoutingModule } from './keys-routing.module';
import { KeysComponent } from './keys.component';
import { PageHeaderModule } from '../components/page-header/page-header.module';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    KeysComponent
  ],
  imports: [
    CommonModule,
    KeysRoutingModule,
    PageHeaderModule,

    //Angular Material Modules
    MatButtonModule,

  ],
  exports: [
  ]
})
export class KeysModule { }
