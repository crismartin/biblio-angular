import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SharedCustomerService} from '../../shared/services/shared-customer.service';
import {SharedBookService} from '../../shared/services/shared-book.service';

@Component({
  selector: 'app-search-by-book-isbn',
  templateUrl: './search-by-book-isbn.component.html'
})
export class SearchByBookIsbnComponent {
  books: Observable<string[]> = of([]);

  @Input() bookIsbn: string;
  @Output() add = new EventEmitter<string>();

  constructor(private sharedBookService: SharedBookService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchBookByIsbn(): void {
    this.books = this.sharedBookService.searchBookByIsbn(this.bookIsbn);
  }

}
