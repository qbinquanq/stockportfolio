import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './homepage/top-bar/top-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './_helpers';
const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
