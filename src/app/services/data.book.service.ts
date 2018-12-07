import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataBookService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/books');
  }

  getBookById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/book/${id}`);
  }

  saveBook(book: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/book`, book);
  }

  deleteBook(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}` + `/book/${id}`);
  }

  updateBook(id: number, book: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/book`+ `/${id}`, book);
  }   


}
