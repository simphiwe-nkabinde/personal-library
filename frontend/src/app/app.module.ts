import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelfContainerComponent } from './pages/shelf-container/shelf-container.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfListComponent } from './components/shelf-list/shelf-list.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchItemsComponent } from './pages/search-items/search-items.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfContainerComponent,
    ShelfItemComponent,
    ShelfListComponent,
    ItemDetailComponent,
    NavbarComponent,
    SearchItemsComponent,
    LandingComponent
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
