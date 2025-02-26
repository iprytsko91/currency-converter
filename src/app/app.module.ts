import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { provideHttpClient } from '@angular/common/http';
import { IonicStorageModule } from "@ionic/storage-angular";
import { NgxsModule } from "@ngxs/store";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeState } from "./home/store/home.state";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    NgxsModule.forRoot([HomeState], { developmentMode: true }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
