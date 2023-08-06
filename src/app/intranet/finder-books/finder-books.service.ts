import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {SearchBook} from '../shared/models/search-book';
import {EndPoints} from '@shared/end-points';
import {BookSearchFilter} from './book-search-filter';

@Injectable({
  providedIn: 'root'
})
export class FinderBooksService {
  private static SEARCH = '/search';

  constructor(private httpService: HttpService) { }

  search(bookSearchFilter: BookSearchFilter): Observable<SearchBook[]> {
    console.log(bookSearchFilter);
    return this.httpService
      .paramsFrom(bookSearchFilter)
      .get(EndPoints.BOOKS + FinderBooksService.SEARCH);
  }
}
