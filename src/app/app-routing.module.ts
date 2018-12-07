import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { DetailAuthorComponent } from './detail-author/detail-author.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { BookComponent } from './book/book.component';
import { IndexComponent } from '../app/index/index.component'
 
const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {
    path: 'author/:id',
    component: DetailAuthorComponent
  },
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'book/:id',
    component: DetailBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
