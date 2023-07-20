import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {LoanNew} from '../shared/models/loan-new';
import {EndPoints} from '@shared/end-points';
import {LoanInfo} from '../shared/models/loan-info';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpService: HttpService) { }

  create(loan: LoanNew): Observable<LoanInfo> {
    return this.httpService
      .post(EndPoints.LOANS, loan);
  }

  getInfo(idLoan: string): Observable<LoanInfo> {
    return this.httpService
      .get(EndPoints.LOANS + '/' + idLoan);
  }
}
