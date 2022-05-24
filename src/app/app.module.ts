import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './_components';
import { MainContentComponent } from './main-content/main-content.component';
import { LayoutSidenavWidgetComponent } from './features/layout-sidenav-widget/layout-sidenav-widget.component';
import { LayoutTopbarWidgetComponent } from './features/layout-topbar-widget/layout-topbar-widget.component';
import { LayoutFooterWidgetComponent } from './features/layout-footer-widget/layout-footer-widget.component';
import { HomeComponent } from './home';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  declarations: [ 
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    MainContentComponent,
    LayoutSidenavWidgetComponent,
    LayoutTopbarWidgetComponent,
    LayoutFooterWidgetComponent
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
