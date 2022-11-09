import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {BooksService} from './books/books.service';
import {LoanService} from './loan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  books = of([]);
  disableBtnCancelar: boolean;
  customer: string;
  showBooksSelectionDiv: boolean;
  readyToCreate: boolean;
  barcodeValue: string;

  constructor(private router: Router, private loanService: LoanService,
              private bookService: BooksService) {
    this.disableBtnCancelar = false;
    this.customer = null;
    this.showBooksSelectionDiv = false;
    this.readyToCreate = false;
  }

  ngOnInit(): void {
  }

  addCustomer(customerResult: string): void {
    const customerTuple = customerResult.split(' - ');
    if (customerTuple.length === 2){
      this.customer = customerTuple[0];
      this.showBooksSelectionDiv = true;
    }else{
      this.showBooksSelectionDiv = false;
    }
  }

  create(): void {
    const copyBooksReferences: string[] = this.bookService.getDataFromTable()
      .map(copyBook => copyBook.reference);

    const loan = {
      numberMembership: this.customer,
      books: copyBooksReferences
    };

    this.loanService.create(loan)
      .subscribe(loanInfo => {
        this.router.navigate(['intranet', 'loan', loanInfo.reference, 'success']).then();
      });
  }

  cancel(): void {
    this.showBooksSelectionDiv = false;
    //TODO Borramos los libros seleccionados
    this.bookService.deleteAllData();
    //TODO Borramos el usuario seleccionado
    this.customer = '';
  }

  checkHasBooks(hasBooks: boolean): void {
    this.readyToCreate = hasBooks && this.customer !== '';
  }
}
