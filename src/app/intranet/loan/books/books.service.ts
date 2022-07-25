import {Injectable} from '@angular/core';
import {Book} from '../../shared/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksSelected: Book[];

  constructor() {
    this.booksSelected = [];
  }

  getDataFromTable(): Book[] {
    return this.booksSelected;
  }

  addDataInTable(book: Book): void {
    this.booksSelected.push(book);
    console.log(this.booksSelected);
  }

  updateDataFromTable(booksSelected: Book[]): void {
    this.booksSelected = booksSelected;
  }

  deleteDataFromTable(bookSelected: Book): void {
    this.booksSelected = this.booksSelected
      .filter(book => book.isbn !== bookSelected.isbn);
  }

  deleteAllData(): void {
    this.booksSelected = [];
  }
}
