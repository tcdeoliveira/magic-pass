import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { 
    path: '', component: ProfileComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../../../views/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'investments', loadChildren: () => import('../../../views/investments/investments.module').then(m => m.InvestmentsModule) },
      { path: 'brokerage-firms', loadChildren: () => import('../../../views/brokerage-firms/brokerage-firms.module').then(m => m.BrokerageFirmsModule) },
      { path: '**', redirectTo: '/dashboard'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
