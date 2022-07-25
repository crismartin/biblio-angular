import {Component, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {BooksService} from './books/books.service';
import {LoanService} from './loan.service';

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

  constructor(private loanService: LoanService, private bookService: BooksService) {
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
    // crear nuevo LoanNewDto
    const isbns: string[] = this.bookService.getDataFromTable()
      .map(book => book.isbn);

    const loan = {
      numberMembership: this.customer,
      books: isbns
    };
    // enviarlo al back con llamada al servicio
    this.loanService.create(loan)
      .subscribe(() => {
        console.log('Ha ido correctamente el prestamo');
        // hacer un route a la pantalla de success si ha ido bien
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
