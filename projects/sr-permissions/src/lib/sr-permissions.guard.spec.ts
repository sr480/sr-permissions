import { TestBed, async, inject } from '@angular/core/testing';

import { SrPermissionsGuard } from './sr-permissions.guard';

describe('SrPermissionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SrPermissionsGuard]
    });
  });

  it('should ...', inject([SrPermissionsGuard], (guard: SrPermissionsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
