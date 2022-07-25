import { Injectable } from '@angular/core';
import {HttpService} from '@core/http.service';
import {Observable} from 'rxjs';
import {Loan} from '../shared/models/loan';
import {EndPoints} from '@shared/end-points';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private httpService: HttpService) { }

  create(loan: Loan): Observable<void> {
    return this.httpService
      .post(EndPoints.LOANS, loan);
  }
}
