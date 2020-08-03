import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardViewComponent } from './card-view/card-view.component';
import { HttpClientModule } from '@angular/common/http';
import { KeysPipe } from './keys.pipe';

@NgModule({
  declarations: [AppComponent, CardViewComponent, KeysPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
