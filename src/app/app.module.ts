import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IntlModule } from '@progress/kendo-angular-intl';

import '@progress/kendo-angular-intl/locales/bg/all';
import '@progress/kendo-angular-intl/locales/de/all';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap:    [ AppComponent ],
  declarations: [ AppComponent ],
  imports:      [ BrowserModule, BrowserAnimationsModule, IntlModule ]
})
export class AppModule { }
