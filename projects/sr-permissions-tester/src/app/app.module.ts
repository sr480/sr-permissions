import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SrPermissionsModule } from 'projects/sr-permissions/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SrPermissionsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
