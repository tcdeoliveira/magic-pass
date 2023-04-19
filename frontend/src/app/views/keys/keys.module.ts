import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeysRoutingModule } from './keys-routing.module';
import { KeysComponent } from './keys.component';
import { PageHeaderModule } from '../components/page-header/page-header.module';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PopUpComponentsModule } from '../components/pop-up/pop-up-components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    KeysComponent
  ],
  imports: [
    CommonModule,
    KeysRoutingModule,
    PageHeaderModule,
    ReactiveFormsModule,
    FormsModule,
    //Angular Material Modules
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    PopUpComponentsModule,
  ]
})
export class KeysModule { }
