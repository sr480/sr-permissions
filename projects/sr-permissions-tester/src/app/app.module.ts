import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SrPermissionsModule } from 'projects/sr-permissions/src/public-api';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ForAdminComponent } from './for-admin/for-admin.component';
import { ForUserComponent } from './for-user/for-user.component';
import { ExceptUserComponent } from './except-user/except-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ForAdminComponent,
    ForUserComponent,
    ExceptUserComponent
  ],
  imports: [
    BrowserModule,
    SrPermissionsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
