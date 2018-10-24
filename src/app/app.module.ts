import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardInfoComponent } from './components/card-info/card-info.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
