import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfListComponent } from './components/shelf-list/shelf-list.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    ShelfItemComponent,
    ShelfListComponent,
    BookInfoComponent,
    NavbarComponent,
    SearchComponent,
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
