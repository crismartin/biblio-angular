import {Injectable} from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {EndPoints} from '@shared/end-points';
import {CopyBook} from '../../shared/models/copybook';

@Injectable({
  providedIn: 'root'
})
export class CopybookService {

  constructor(private httpService: HttpService) { }

  getByReference(reference: string): Observable<CopyBook>  {
    return this.httpService
      .get(EndPoints.COPY_BOOKS + '/' + reference);
  }

}
