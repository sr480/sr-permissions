import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { SrPermissionsGuard } from 'projects/sr-permissions/src/public-api';
import { ForUserComponent } from './for-user/for-user.component';
import { ForAdminComponent } from './for-admin/for-admin.component';
import { ExceptUserComponent } from './except-user/except-user.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'for-user', component: ForUserComponent, data: { permissions: { only: ['user'], redirect: '/' } }, canActivate: [SrPermissionsGuard] },
  { path: 'for-admin', component: ForAdminComponent, data: { permissions: { only: ['admin', 'superuser'], redirect: '/' } }, canActivate: [SrPermissionsGuard] },
  { path: 'except-user', component: ExceptUserComponent, data: { permissions: { except: 'user', redirect: '/' } }, canActivate: [SrPermissionsGuard] }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
