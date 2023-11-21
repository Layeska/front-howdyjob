import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from 'src/components/menu/menu.component';
import { MainLandingComponent } from 'src/components/main-landing/main-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainLandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
