import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbButtonModule,
  NbSidebarModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { StatusComponent } from './shared/components/status/status.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { SharedModule } from './shared/shared.module';

const NbModules = [
  NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
  NbThemeModule.forRoot({ name: 'default' }),
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbEvaIconsModule,
  NbSidebarModule,
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    ...NbModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
