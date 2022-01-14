import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfContainerComponent } from './components/shelf-container/shelf-container.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { SearchItemsComponent } from './components/search-items/search-items.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  { path: 'myshelf', component: ShelfContainerComponent },
  { path: 'detail', component: ItemDetailComponent},
  { path: 'search', component: SearchItemsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
