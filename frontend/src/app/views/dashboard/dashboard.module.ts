import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../components/card/card.module';
import { StatusCardComponent } from './components/status-card/status-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StatusCardComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,MatButtonModule
  ]
})
export class DashboardModule { }
