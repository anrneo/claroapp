import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './offer/offer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
