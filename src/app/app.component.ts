import { Component } from '@angular/core';
import { NbIconLibraries, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private iconLibraries: NbIconLibraries,
    private sidebarService: NbSidebarService
  ) {
    console.log('loading 3rd party icon');
    this.iconLibraries.registerSvgPack('3rd', {
      facebook:
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> ... </svg>',
      twitter:
        '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"> ... </svg>',
      // ...
    });
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
