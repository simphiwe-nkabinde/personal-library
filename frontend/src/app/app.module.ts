import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelfContainerComponent } from './components/shelf-container/shelf-container.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfListComponent } from './components/shelf-list/shelf-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfContainerComponent,
    ShelfItemComponent,
    ShelfListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
