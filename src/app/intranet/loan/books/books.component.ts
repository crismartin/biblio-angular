import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../shared/models/book';
import {BooksService} from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Output() hasBooks = new EventEmitter<boolean>();
  booksSelected: Book[];
  dataSource: MatTableDataSource<Book>;
  displayedColumns: string[] = ['isbn', 'title', 'author', 'actions'];

  constructor(private bookService: BooksService) {
    this.booksSelected = this.bookService.getDataFromTable();
    this.refreshTable();
  }

  deleteBook(book: Book): void {
    this.bookService.deleteDataFromTable(book);
    this.booksSelected = this.bookService.getDataFromTable();
    this.refreshTable();
  }

  addBook(bookResult: string): void {
    const bookSplited = bookResult.split(' - ');
    if (bookSplited.length === 2){
      this.bookService.addDataInTable(this.parseToBook(bookSplited));
      this.refreshTable();
    }
  }

  refreshTable(): void {
    this.dataSource = new MatTableDataSource<Book>(this.booksSelected);
    this.hasBooks.emit(this.booksSelected.length > 0);
  }

  private parseToBook(bookSplited: string[]): Book {
    return {
      isbn: bookSplited[0],
      title : bookSplited[1]
    };
  }
}
