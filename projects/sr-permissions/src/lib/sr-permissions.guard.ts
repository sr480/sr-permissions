import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { SrPermissionsService } from './sr-permissions.service';
import { map } from 'rxjs/operators';

interface IDataPermissions {
  permissions: {
    only?: string | string[];
    except?: string | string[];
    redirect?: string;
  };
}

function isIDataPermissions(data): data is IDataPermissions {
  if (data && data.permissions) {
    return true;
  }
  return false;
}

@Injectable({
  providedIn: 'root'
})
export class SrPermissionsGuard implements CanActivate {
  constructor(
    private permissionService: SrPermissionsService,
    private router: Router
  ) {}

  private checkRole(roles: string[], value: string | string[]) {
    if (!roles || !roles.length) {
      return false;
    }

    if (value instanceof Array) {
      for (const item of value) {
        if (roles.find(r => r === item)) {
          return true;
        }
      }
    } else {
      if (roles.find(r => r === value)) {
        return true;
      }
    }
    return false;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (isIDataPermissions(next.data)) {
      return this.permissionService.getRoles$().pipe(
        map(roles => {
          if (isIDataPermissions(next.data)) {
            let isValid = false;
            if (next.data.permissions.only) {
              if (this.checkRole(roles, next.data.permissions.only)) {
                isValid = true;
              }
            }
            if (next.data.permissions.except) {
              if (this.checkRole(roles, next.data.permissions.except)) {
                isValid = false;
              } else {
                if (!next.data.permissions.only) {
                  isValid = true;
                }
              }
            }
            if (!isValid && next.data.permissions.redirect) {
              this.router.navigateByUrl(next.data.permissions.redirect);
            }

            return isValid;
          }
          return true;
        })
      );
    }
    return true;
  }
}
