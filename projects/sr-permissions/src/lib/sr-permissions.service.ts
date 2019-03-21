import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class SrPermissionsService {
  private roles$ = new BehaviorSubject<string[]>([]);
  getRoles$(): Observable<string[]> {
    return this.roles$;
  }

  setRoles(roles: string[]) {
    this.roles$.next(roles);
  }

  constructor() { }


}
