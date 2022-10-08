import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './interfaces/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project-bookshop';

  books: any
  isSwiched = false;

  constructor(private http: HttpClient) {
    this.books = []
    this.listBooks()
  }

  listBooks() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe(res => this.books = res);
  }

  switch(state: boolean){
    return this.isSwiched = state  
  }


}
