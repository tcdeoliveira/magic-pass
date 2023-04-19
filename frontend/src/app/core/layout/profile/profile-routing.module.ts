import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { 
    path: '', component: ProfileComponent,
    children: [
      { path: 'keys', loadChildren: () => import('../../../views/keys/keys.module').then(m => m.KeysModule) },
      { path: 'tags', loadChildren: () => import('../../../views/tags/tags.module').then(m => m.TagsModule) },
      { path: '**', redirectTo: '/keys'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
