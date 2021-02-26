import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthTokenInterceptor } from './http-interceptor/auth-token.interceptor';
import { AngularMaterialModule } from './shared/AngularMaterial.module';
import { SharedModule } from './shared/shared.module';
import { AppInitializerDataService } from './app-services/app-initializer-data.service';
import { DialogNotAuthorizedComponent } from './dialog-not-authorized/dialog-not-authorized.component';

export function initApp(appInitializerDataService: AppInitializerDataService) {
  return (): Promise<any> => {
    return appInitializerDataService.AppConfigartionData();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DialogNotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [
    AppInitializerDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AppInitializerDataService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
