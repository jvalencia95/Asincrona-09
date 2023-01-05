import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActividadModule } from './actividad/actividad.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ActividadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
