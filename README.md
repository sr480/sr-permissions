# sr-permissions

This is a simple Angular service providing permission check tools using directives, route guards and in components code.

## Installation and usage

    npm install ????


Add it to your app.module

    @NgModule({
      ...
      imports: [
        SrPermissionsModule.forRoot()
      ]
      ..
    })
    export class AppModule { }


## Service

    constructor(private permissionsService: SrPermissionsService) {
      permissionsService.setRoles(['admin']);
    }
