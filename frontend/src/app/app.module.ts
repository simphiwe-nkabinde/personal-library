import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelfContainerComponent } from './components/shelf-container/shelf-container.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfListComponent } from './components/shelf-list/shelf-list.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfContainerComponent,
    ShelfItemComponent,
    ShelfListComponent,
    ItemDetailComponent,
    NavbarComponent,
    SearchItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
