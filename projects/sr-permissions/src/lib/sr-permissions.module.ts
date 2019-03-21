import { NgModule, ModuleWithProviders } from '@angular/core';
import { SrPermissionsDirective } from './sr-permissions.directive';
import { SrPermissionsService } from './sr-permissions.service';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  declarations: [SrPermissionsDirective, InfoPageComponent],
  exports: [SrPermissionsDirective]
})
export class SrPermissionsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SrPermissionsModule,
      providers: [
        SrPermissionsService
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SrPermissionsModule,
      providers: [
        SrPermissionsService
      ]
    };
  }
}
