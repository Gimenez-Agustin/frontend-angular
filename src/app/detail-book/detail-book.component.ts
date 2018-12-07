import { Component, OnInit } from '@angular/core';
import { DataBookService } from '../services/data.book.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {

  book: Object;

  constructor(private data: DataBookService, private route: ActivatedRoute, private routeRedirect: Router) { 
    this.route.params.subscribe( params => this.book = params.id)
  }

  ngOnInit() {
    this.data.getBookById(this.book).subscribe(
      data => this.book = data
    )
  } 

  delete(idBook: number) {
    this.data.deleteBook(idBook) .subscribe(
      data => {
        console.log(data);
      },
      info => console.log('Info: ' + info.status + " " + info.statusText));
      this.routeRedirect.navigate(['']);
  }

}
