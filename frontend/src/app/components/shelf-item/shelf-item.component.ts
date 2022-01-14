import { Component, Input, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf.service';
import { GooglebooksService } from 'src/app/services/googlebooks.service';

@Component({
  selector: 'app-shelf-item',
  templateUrl: './shelf-item.component.html',
  styleUrls: ['./shelf-item.component.scss']
})
export class ShelfItemComponent implements OnInit {

  @Input() bookItem: any;
  book: any;

  constructor(
    private googlebooksService: GooglebooksService,
    private bookshelfService: BookshelfService
  ) { }

  ngOnInit(): void {
  }

  setItemId(id: any):void {
    this.googlebooksService.setdetailItemId(id)
    this.bookshelfService.setDetailItemId(id)
  }


}
