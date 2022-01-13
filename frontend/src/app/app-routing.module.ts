import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShelfContainerComponent } from './components/shelf-container/shelf-container.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '/', component: AppComponent},
  { path: 'myshelf', component: ShelfContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
