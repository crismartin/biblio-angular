import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {map} from 'rxjs/operators';
import {UtilsConstants} from '@shared/utils-constants';

@Injectable({
  providedIn: 'root'
})
export class SharedAuthorService {

  constructor(private httpService: HttpService) { }

  searchAuthorsByFullName(authorFullName: string): Observable<string[]>  {
    const url = EndPoints.AUTHORS;
    return this.httpService
      .param('fullName', authorFullName)
      .get(url)
      .pipe(
        map(response =>
          {
            console.log(response);
            return response.length === 0 ? [UtilsConstants.NO_RESULTS] : response;
          }
        )
      );
  }
}
