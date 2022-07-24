import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SharedCustomerService} from '../../shared/services/shared-customer.service';

@Component({
  selector: 'app-search-by-customer-reference',
  templateUrl: './search-by-customer-reference.component.html'
})
export class SearchByCustomerReferenceComponent {
  customers: Observable<string[]> = of([]);

  @Input() customerRef: string;
  @Output() add = new EventEmitter<string>();

  constructor(private sharedCustomerService: SharedCustomerService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchCustomerByReference(): void {
    this.customers = this.sharedCustomerService.searchCustomerByReference(this.customerRef);
  }
}
