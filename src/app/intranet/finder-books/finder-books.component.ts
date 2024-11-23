import { Component } from '@angular/core';
import {of} from 'rxjs';
import {BookSearchFilter} from './book-search-filter';
import {FinderBooksService} from './finder-books.service';
import {BookItem} from '../shared/models/book-item';
import {Router} from "@angular/router";

@Component({
  selector: 'app-finder-books',
  templateUrl: './finder-books.component.html',
  styleUrls: ['./finder-books.component.css']
})
export class FinderBooksComponent {

  books = of([]);
  bookSearchFilter: BookSearchFilter;
  showBooksFound = false;
  titleTable = 'Libros encontrados';

  constructor(private finderBookService: FinderBooksService, private router: Router) {
    this.resetSearch();
  }

  search(): void {
    this.showBooksFound = true;

    this.bookSearchFilter.keyword = normalizeString(this.bookSearchFilter.keyword);
    this.bookSearchFilter.authorReference = normalizeString(this.bookSearchFilter.authorReference);

    this.books = this.finderBookService.search(this.bookSearchFilter);
  }

  resetSearch(): void {
    this.showBooksFound = false;
    this.bookSearchFilter = {};
  }

  bookDetail(book: BookItem): void {
    console.log('book a mostrar el detalle : ');
    console.log(book);

    this.router.navigate(['intranet', 'book', book.isbn]);
  }

  addAuthorFullName(authorFullName: string): void {
    this.bookSearchFilter.authorFullName = authorFullName;
  }
}

function normalizeString(str: string): string {
  if (str !== undefined){
    return str.trim();
  }
  return '';
}
