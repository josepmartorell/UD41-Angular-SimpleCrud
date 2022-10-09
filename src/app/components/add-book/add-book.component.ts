import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = {
    title: '',
    description: '',
    published: false
  }
  submitted = false
  apiUrl: string = 'https://faker-papi.herokuapp.com/books'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitBook(){
    const data = {    
      title: this.book.title, 
      description: this.book.description,
      published: this.book.published
    };

    this.http.post<Book>(this.apiUrl, data)
      .subscribe(res => { 
        console.log(res); 
        this.submitted = true;
      });
      this.submitted = false,
      this.book = {
        title: '',
        description: '',
        published: false
  }

  }

  validateData() {
    if (this.book.title != '' && this.book.description != '') {
      this.submitBook();
    } 
  }
  
}


