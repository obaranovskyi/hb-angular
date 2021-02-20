import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HbAngularButtonsModule } from '@obaranovskyi/hb-angular-buttons';

import { MainPageComponent } from './main-page/main-page.component';
import { ButtonsTestComponent } from './buttons-test/buttons-test.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ButtonsTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HbAngularButtonsModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
