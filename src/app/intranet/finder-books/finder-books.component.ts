import { Component } from '@angular/core';
import {of} from 'rxjs';
import {BookSearchFilter} from './book-search-filter';
import {FinderBooksService} from './finder-books.service';
import {SearchBook} from '../shared/models/search-book';

@Component({
  selector: 'app-finder-books',
  templateUrl: './finder-books.component.html'
})
export class FinderBooksComponent {

  books = of([]);
  bookSearchFilter: BookSearchFilter;
  showBooksFound = false;
  titleTable = 'Libros encontrados';

  constructor(private finderBookService: FinderBooksService) {
    this.resetSearch();
  }

  search() {
    this.showBooksFound = true;

    this.bookSearchFilter.keyword = normalizeString(this.bookSearchFilter.keyword);
    this.bookSearchFilter.authorReference = normalizeString(this.bookSearchFilter.authorReference);

    this.books = this.finderBookService.search(this.bookSearchFilter);
  }

  resetSearch() {
    this.showBooksFound = false;
    this.bookSearchFilter = {};
  }

  bookDetail(book: SearchBook) {

  }
}

function normalizeString(str: string): string {
  if (str !== undefined){
    return str.trim();
  }
  return '';
}
