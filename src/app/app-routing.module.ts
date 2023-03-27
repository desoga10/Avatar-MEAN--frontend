import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { EditAvatarComponent } from './components/edit-avatar/edit-avatar.component';
import { ListAvatarComponent } from './components/list-avatar/list-avatar.component';

const routes: Routes = [
  { path: 'add-avatar', component: AddAvatarComponent },
  { path: 'edit-avatar/:id', component: EditAvatarComponent },
  { path: '', component: ListAvatarComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
