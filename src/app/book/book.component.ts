import { Component, OnInit } from '@angular/core';
import { DataBookService } from '../services/data.book.service';
import { DataAuthorService} from '../services/data.author.service';
import { Book } from '../classes/Book';
import { Author } from '../classes/Author';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})

export class BookComponent implements OnInit {
  
  book: Book = new Book();
  author: Author= new Author();
  books: object;
  authors: object;

  constructor(private dataBook: DataBookService, private dataAuthor: DataAuthorService) {  
    this.dataAuthor.getAuthors().subscribe(
             data => this.authors = data
    )  
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }  

  save() {
    this.book.author = this.author;
    this.dataBook.saveBook(this.book).subscribe(
      data => this.loadData(), 
      info => console.log(info));
      this.loadData();
    this.book = new Book();     
  }

  loadData() {
    this.dataBook.getBooks().subscribe(
      data => {this.books = data;});
  }

  onSubmit() {
    if(this.book.title!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
    
  }

}