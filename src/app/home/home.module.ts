import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { HistoryComponent } from "./history/history.component";
import { ConverterComponent } from "./converter/converter.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgOptimizedImage,
  ],
  declarations: [HomePage, ConverterComponent, HistoryComponent],
})
export class HomePageModule {}
