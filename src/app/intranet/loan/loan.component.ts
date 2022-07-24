import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  loanForm: FormGroup;
  disableBtnCancelar: boolean;
  customer: string;

  constructor() {
    this.loanForm = new FormGroup({});
    this.disableBtnCancelar = false;
    this.customer = null;
  }

  ngOnInit(): void {
  }

  onSubmit(vehicleForm: any) {
  }

  hasError(plate: string, required: string) {
  }

  addCustomer(customer: string): void {
    this.customer = customer;
  }
}
