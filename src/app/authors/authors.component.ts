import { Component, OnInit } from '@angular/core';
import { DataAuthorService } from '../services/data.author.service';
import { Author } from '../classes/Author';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})

export class AuthorsComponent implements OnInit {

  
  author: Author = new Author();

  authors: object;

  constructor(private data: DataAuthorService) {  
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
  }  

  save() {
    this.data.saveAuthor(this.author).subscribe(
      data => this.loadData(), 
      info => console.log(info));
      this.loadData();
    this.author = new Author();     
  }

  loadData() {
    this.data.getAuthors().subscribe(
      data => {this.authors = data;});
  }

  onSubmit() {
    if(this.author.name!=null){
      this.save();
    }else{
      alert("Please fill the form");
    }
    
  }

}
