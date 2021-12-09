import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstDirective } from './first.directive';
import { NeedDataService } from './need-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NeedDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
