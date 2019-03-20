import { Component } from '@angular/core';
import { SrPermissionsService } from 'projects/sr-permissions/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  role = 'admin';
  constructor(private permissionsService: SrPermissionsService) {
    permissionsService.setRoles(['admin']);
  }

  toggleRole() {
    if (this.role === 'admin') {
      this.role = 'user';
    } else if (this.role === 'user') {
      this.role = 'superuser';
    } else {
      this.role = 'admin';
    }
    this.permissionsService.setRoles([this.role]);
  }
}
