import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokerageFirmsRoutingModule } from './brokerage-firms-routing.module';
import { BrokerageFirmsComponent } from './brokerage-firms.component';
import { PageHeaderModule } from './../components/page-header/page-header.module';
import {MatButtonModule} from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    BrokerageFirmsComponent
  ],
  imports: [
    CommonModule,
    BrokerageFirmsRoutingModule,
    PageHeaderModule,
    MatPaginatorModule,
    //Angular Material Modules
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class BrokerageFirmsModule { }
