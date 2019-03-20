import { Component } from '@angular/core';
import { SrPermissionsService } from 'projects/sr-permissions/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sr-permissions-tester';
  private lastRole = 'admin';
  constructor(private permissionsService: SrPermissionsService) {
    permissionsService.setRoles(['admin']);
  }

  toggleRole() {
    if (this.lastRole === 'admin') {
      this.lastRole = 'user';
    } else {
      this.lastRole = 'admin';
    }
    this.permissionsService.setRoles([this.lastRole]);
  }
}
