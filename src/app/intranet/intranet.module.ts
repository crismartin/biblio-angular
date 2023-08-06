import {NgModule} from '@angular/core';

import {SharedModule} from '@shared/shared.module';

import {IntranetComponent} from './intranet.component';
import {IntranetRoutingModule} from './intranet-routing.module';
import { LoanComponent } from './loan/loan.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchByCustomerReferenceComponent } from './searchers/search-by-customer-reference/search-by-customer-reference.component';
import { SearchByBookIsbnComponent } from './searchers/search-by-book-isbn/search-by-book-isbn.component';
import { BooksComponent } from './loan/books/books.component';
import { SuccessComponent } from './loan/success/success.component';
import {NgxBarcodeModule} from 'ngx-barcode';
import { FinderBooksComponent } from './finder-books/finder-books.component';
import { SearchByAuthorFullnameComponent } from './searchers/search-by-author-fullname/search-by-author-fullname.component';

@NgModule({
  declarations: [
    IntranetComponent,
    LoanComponent,
    SearchByCustomerReferenceComponent,
    SearchByBookIsbnComponent,
    BooksComponent,
    SuccessComponent,
    FinderBooksComponent,
    SearchByAuthorFullnameComponent
  ],
  entryComponents: [
  ],
  imports: [
    SharedModule,
    IntranetRoutingModule,
    ReactiveFormsModule,
    NgxBarcodeModule,
  ],
  providers: [
  ],
})
export class IntranetModule {

}
