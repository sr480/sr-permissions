import { TestBed } from '@angular/core/testing';

import { SrPermissionsService } from './sr-permissions.service';

describe('SrPermissionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrPermissionsService = TestBed.get(SrPermissionsService);
    expect(service).toBeTruthy();
  });
});
