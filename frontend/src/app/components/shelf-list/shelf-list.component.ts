import { Component, Input, OnInit } from '@angular/core';
import { BookshelfService } from 'src/app/services/bookshelf.service';
import { GooglebooksService } from 'src/app/services/googlebooks.service';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {

  showList:boolean = true;

  @Input() listTitle = '';
  bookList: object[] = []
  
  constructor(
    private googlebooksService: GooglebooksService,
    private bookshelfService: BookshelfService
  ) { }

  ngOnInit(): void {
    this.bookshelfService.getShelf(this.listTitle)
      .subscribe(data => {
        this.getBooks(data)
      }, err => {
        console.log(err)
      })
  }
  showListToggle(): void {
    this.showList = !this.showList;
  }

  getBooks(idArr: object[]): void {
    idArr.forEach(id => {
      let book = this.googlebooksService.getshelfItem(id)
        .subscribe(data => {
          this.bookList.push(data);
        });
    })
    console.log(this.bookList)
  }

}
