import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrokerageFirmsComponent } from './brokerage-firms.component';

const routes: Routes = [{ path: '', component: BrokerageFirmsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokerageFirmsRoutingModule { }
