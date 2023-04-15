import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestmentsRoutingModule } from './investments-routing.module';
import { InvestmentsComponent } from './investments.component';
import { PageHeaderModule } from './../components/page-header/page-header.module';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    InvestmentsComponent
  ],
  imports: [
    CommonModule,
    InvestmentsRoutingModule,
    PageHeaderModule,
    
    //Angular Material Modules
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule
  ]
})
export class InvestmentsModule { }
