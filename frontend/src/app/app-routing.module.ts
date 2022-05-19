import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfContainerComponent } from './pages/shelf-container/shelf-container.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { SearchItemsComponent } from './pages/search-items/search-items.component';
import { LandingComponent } from './pages/landing/landing.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  { path: 'myshelf', component: ShelfContainerComponent },
  { path: 'detail', component: ItemDetailComponent},
  { path: 'search', component: SearchItemsComponent },
  { path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
