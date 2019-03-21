import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  SimpleChanges,
  Input,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { SrPermissionsService } from './sr-permissions.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[srPermissionsOnly],[srPermissionsExcept]'
})
export class SrPermissionsDirective implements OnChanges, OnDestroy {
  private onDestroy$ = new Subject();
  private permissionsOnly: string | string[];
  private permissionsExcept: string | string[];
  private roles = new Array<string>();
  @Input()
  set srPermissionsOnly(value: string | string[]) {
    this.permissionsOnly = value;
    this.validatePermissions();
  }

  @Input()
  set srPermissionsExcept(value: string | string[]) {
    this.permissionsExcept = value;
    this.validatePermissions();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionsService: SrPermissionsService
  ) {
    this.permissionsService
      .getRoles$()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(r => {
        this.roles = r;
        this.validatePermissions();
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.validatePermissions();
  }
  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  private checkRole(value: string | string[]) {
    if (!this.roles || !this.roles.length) {
      return false;
    }

    if (value instanceof Array) {
      for (const item of value) {
        if (this.roles.find(r => r === item)) {
          return true;
        }
      }
    } else {
      if (this.roles.find(r => r === value)) {
        return true;
      }
    }
    return false;
  }

  private validatePermissions() {
    let isValid = false;
    if (this.permissionsOnly) {
      if (this.checkRole(this.permissionsOnly)) {
        isValid = true;
      }
    }
    if (this.permissionsExcept) {
      if (this.checkRole(this.permissionsExcept)) {
        isValid = false;
      } else {
        if (!this.permissionsOnly) {
          isValid = true;
        }
      }
    }

    this.viewContainer.clear();
    if (isValid && this.templateRef) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
