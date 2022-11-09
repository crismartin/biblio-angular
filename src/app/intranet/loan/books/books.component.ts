import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Book} from '../../shared/models/book';
import {BooksService} from './books.service';
import {CopyBook} from '../../shared/models/copybook';
import {CopybookService} from './copybook.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  @Output() hasBooks = new EventEmitter<boolean>();
  booksSelected: CopyBook[];
  dataSource: MatTableDataSource<CopyBook>;
  displayedColumns: string[] = ['isbn', 'title', 'author', 'actions'];

  constructor(private bookService: BooksService, private copyBookService: CopybookService) {
    this.booksSelected = this.bookService.getDataFromTable();
    this.refreshTable();
  }

  deleteBook(book: CopyBook): void {
    this.bookService.deleteDataFromTable(book);
    this.booksSelected = this.bookService.getDataFromTable();
    this.refreshTable();
  }

  addBook(bookResult: string): void {
    const bookSplited = bookResult.split(' / ');
    if (bookSplited.length === 2){
      this.copyBookService.getByReference(bookSplited[1])
        .subscribe(copyBook => {
          this.bookService.addDataInTable(copyBook);
          this.refreshTable();
        });
    }
  }

  refreshTable(): void {
    this.dataSource = new MatTableDataSource<CopyBook>(this.booksSelected);
    this.hasBooks.emit(this.booksSelected.length > 0);
  }

}
