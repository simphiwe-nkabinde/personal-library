import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlideAnimationsModule } from './slide-animations/slide-animations.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { ShelfItemComponent } from './components/shelf-item/shelf-item.component';
import { ShelfListComponent } from './components/shelf-list/shelf-list.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './pages/search/search.component';
import { LandingComponent } from './pages/landing/landing.component';
import { BookNotesComponent } from './pages/book-notes/book-notes.component';
import { BookNoteModalComponent } from './components/book-note-modal/book-note-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelfComponent,
    ShelfItemComponent,
    ShelfListComponent,
    BookInfoComponent,
    NavbarComponent,
    SearchComponent,
    LandingComponent,
    BookNotesComponent,
    BookNoteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SlideAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
