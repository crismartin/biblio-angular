import {Injectable} from '@angular/core';
import {CopyBook} from 'app/intranet/shared/models/copybook';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  booksSelected: CopyBook[];

  constructor() {
    this.booksSelected = [];
  }

  getDataFromTable(): CopyBook[] {
    return this.booksSelected;
  }

  addDataInTable(book: CopyBook): void {
    if (!this.alreadyExistInTable(book)){
      this.booksSelected.push(book);
      console.log(this.booksSelected);
    }
  }

  updateDataFromTable(booksSelected: CopyBook[]): void {
    this.booksSelected = booksSelected;
  }

  deleteDataFromTable(copybookSelected: CopyBook): void {
    this.booksSelected = this.booksSelected
      .filter(copyBook => copyBook.book.isbn !== copybookSelected.book.isbn);
  }

  deleteAllData(): void {
    this.booksSelected = [];
  }

  private alreadyExistInTable(copyBookAdded: CopyBook): boolean {
    return this.booksSelected
      .filter(copyBook => copyBook.book.isbn === copyBookAdded.book.isbn)
      .length === 1;
  }
}
