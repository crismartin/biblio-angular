import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {map} from 'rxjs/operators';
import {HttpService} from '@core/http.service';

@Injectable({
  providedIn: 'root'
})
export class SharedBookService {

  constructor(private httpService: HttpService) { }

  searchBookByIsbn(bookIsbn: string): Observable<string[]>  {
    const url = EndPoints.COPY_BOOKS + EndPoints.RESOURCE_BOOK + '/' + bookIsbn;
    return this.httpService
      .get(url)
      .pipe(
        map(response =>
          {
            const bookResult = response.element;
            return bookResult == null
              ? ['No se ha encontrado resultados']
              : [bookResult.title + ' / ' + bookResult.reference];
          }
        )
      );
  }
}
