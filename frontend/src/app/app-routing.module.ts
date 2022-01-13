import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfContainerComponent } from './components/shelf-container/shelf-container.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  { path: 'myshelf', component: ShelfContainerComponent },
  { path: 'detail', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
