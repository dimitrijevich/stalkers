import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ListComponent } from '../list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // Dodajte FormsModule
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
