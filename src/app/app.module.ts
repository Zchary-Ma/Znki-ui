import { RouterModule } from '@angular/router';
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
  NbListModule,
  NbCardModule,
  NbMenuModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { HeaderComponent } from './shared/pages/header/header.component';
import { SidebarComponent } from './shared/pages/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

const NbModules = [
  NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
  NbThemeModule.forRoot({ name: 'default' }),
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbEvaIconsModule,
  NbSidebarModule,
  NbListModule,
  NbCardModule,
  NbMenuModule.forRoot(),
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
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
    ...NbModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
