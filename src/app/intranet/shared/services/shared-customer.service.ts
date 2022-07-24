import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {EndPoints} from '../../../shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class SharedCustomerService {

  constructor(private httpService: HttpService) {
  }

  searchCustomerByReference(customerRef: string): Observable<string[]>  {
    const url = EndPoints.CUSTOMERS + '/' + customerRef;
    return this.httpService
      .get(url)
      .pipe(
        map(response => {
            return response.length === 0 ? ['No se ha encontrado resultados'] : response;
          }
        )
      );
  }
}
