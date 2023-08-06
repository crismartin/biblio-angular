import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {SharedAuthorService} from '../../shared/services/shared-author.service';

@Component({
  selector: 'app-search-by-author-fullname',
  templateUrl: './search-by-author-fullname.component.html'
})
export class SearchByAuthorFullnameComponent {
  authors: Observable<string[]> = of([]);

  @Input() authorFullName: string;
  @Output() add = new EventEmitter<string>();

  constructor(private sharedAuthorService: SharedAuthorService) {
  }

  public onSelect(value): void {
    this.add.emit(value);
  }

  searchAuthorsByFullName(): void {
    this.authors = this.sharedAuthorService.searchAuthorsByFullName(this.authorFullName);
  }

}
