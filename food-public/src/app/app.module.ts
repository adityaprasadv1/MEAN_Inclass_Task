import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
