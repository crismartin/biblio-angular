import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoanService} from '../loan.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  customerName: string;
  endDate: Date;

  constructor(private activatedRoute: ActivatedRoute, private loanService: LoanService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const idLoan = params.get('id');
      this.loanService.getInfo(idLoan)
        .subscribe(loan => {
          console.log(loan);
          this.customerName = loan.customerName;
          this.endDate = loan.endDate;
        });
    });
  }

}
