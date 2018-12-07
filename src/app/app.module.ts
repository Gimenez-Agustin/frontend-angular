import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import {HttpClientModule } from '@angular/common/http';
import { DetailAuthorComponent } from './detail-author/detail-author.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AuthorsComponent,
    BookComponent,
    DetailAuthorComponent,
    DetailBookComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
