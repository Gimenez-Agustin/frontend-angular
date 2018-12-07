import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataAuthorService {

  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {   }

  getAuthors(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + '/authors');
  }

  getAuthorById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/author/${id}`);
  }

  saveAuthor(author: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/author`, author);
  }

  deleteAuthor(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}` + `/author/${id}`);
  }

  updateAuthor(id: number, author: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, author);
  }

}
