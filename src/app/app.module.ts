import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CoinapiInterceptor } from './http-interceptors/coinapi.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: CoinapiInterceptor, multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
