import { NgModule, ModuleWithProviders } from '@angular/core';
import { SrPermissionsDirective } from './sr-permissions.directive';
import { SrPermissionsService } from './sr-permissions.service';

@NgModule({
  declarations: [SrPermissionsDirective],
  imports: [],
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
