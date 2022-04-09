import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { SearchPlaceComponent } from './search-place/search-place.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SearchPlaceComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
