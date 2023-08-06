import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {BookItem} from '../shared/models/book-item';
import {EndPoints} from '@shared/end-points';
import {BookSearchFilter} from './book-search-filter';

@Injectable({
  providedIn: 'root'
})
export class FinderBooksService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) { }

  search(bookSearchFilter: BookSearchFilter): Observable<BookItem[]> {
    console.log(bookSearchFilter);
    return this.httpService
      .paramsFrom(bookSearchFilter)
      .get(EndPoints.BOOKS + FinderBooksService.SEARCH);
  }
}
