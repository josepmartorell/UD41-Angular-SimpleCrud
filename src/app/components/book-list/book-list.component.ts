import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  public load: boolean;
  public page!: number;

  @Input()
  list: any = null

  currentBook: any = {} //that's que question
  currentIndex: number = -1

  constructor() {
    this.load = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 3000);
  }

  setActiveBook(current: Book[], index: number): void {
    this.currentBook = current //any type var stores interface type value
    this.currentIndex = index
  }

}




