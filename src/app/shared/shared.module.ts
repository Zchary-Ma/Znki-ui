import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { StatusComponent } from './components/status/status.component';

@NgModule({
  declarations: [StatusComponent, SearchBarComponent],
  imports: [CommonModule],
  exports: [StatusComponent, SearchBarComponent],
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      console.warn(`shared module only injects once`);
    }
  }
}
