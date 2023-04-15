import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./core/layout/profile/profile.module').then(m => m.ProfileModule) 
  },
  {
    path: '*', redirectTo: 'profile',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
