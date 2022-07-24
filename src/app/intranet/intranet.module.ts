import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';

import {IntranetComponent} from './intranet.component';
import {IntranetRoutingModule} from './intranet-routing.module';
import { LoanComponent } from './loan/loan.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchByCustomerReferenceComponent } from './searchers/search-by-customer-reference/search-by-customer-reference.component';

@NgModule({
  declarations: [
    IntranetComponent,
    LoanComponent,
    SearchByCustomerReferenceComponent,
  ],
  entryComponents: [
  ],
  imports: [
    SharedModule,
    IntranetRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
})
export class IntranetModule {

}
