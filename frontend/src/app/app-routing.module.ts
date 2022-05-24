import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { BookInfoComponent } from './pages/book-info/book-info.component';
import { SearchComponent } from './pages/search/search.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  { path: 'myshelf', component: ShelfComponent },
  { path: 'books/:id', component: BookInfoComponent},
  { path: 'search', component: SearchComponent },
  { path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
