import { Component, OnInit } from '@angular/core';
import {BookDetail} from '../shared/models/book-detail';
import {ActivatedRoute} from "@angular/router";
import {SharedBookService} from "../shared/services/shared-book.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookDetail: BookDetail = {};
  constructor(private activatedRoute: ActivatedRoute, private sharedBookService: SharedBookService) {
    this.bookDetail = {
      signature: 'ALGO',
      available: true,
      availabilityDate: '21/01/2025',
      section: 'ALGO',
      location: 'DEPOSITO',
      book: {
        isbn: '9918181821ES',
        title: 'TITULO DE PRUEBA',
        releaseDate: new Date(),
        summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum sapien non odio vulputate, et aliquam eros vestibulum. Praesent lacinia tempor lectus nec viverra. Quisque vestibulum elit id pellentesque tristique. Quisque blandit vulputate nisl sed fermentum. Fusce rutrum sit amet dui at consequat. Ut a dui ut mauris eleifend lobortis. Aenean enim sapien, pellentesque et purus et, malesuada porttitor urna.\n' +
          '\n' +
          'Proin quam erat, bibendum a faucibus a, consectetur a elit. Vivamus pellentesque, tellus vel pulvinar vehicula, lacus arcu malesuada urna, condimentum aliquam mauris felis eget sem. Nulla facilisis facilisis dignissim. Etiam venenatis viverra nibh eu rhoncus. Maecenas sit amet purus non nibh tempus ullamcorper. Vivamus vel commodo ipsum. Nunc cursus venenatis mauris, accumsan iaculis diam vulputate eget.',
        numberOfCopies: 5,
        authors: [{fullName: 'AMADOR RIVAS INTTA HOUSE'}, {fullName: 'PEPE VIYUELA'}],
        categories: [{name: 'Drama'}, {name: 'Aventuras'}, {name: 'SCIFI'}]
      }
    };
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.sharedBookService.getCopybookFromIsbn(params.get('isbn'))
        .subscribe(book => {
          this.bookDetail = book;
        });
    });
  }

  getAuthors(): string {
    return this.bookDetail.book.authors
      .map(author => author.fullName)
      .join(', ');
  }

  getCategories(): string {
    return this.bookDetail.book.categories
      .map(category => category.name)
      .join(', ');
  }
}
