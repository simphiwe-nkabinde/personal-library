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
  bookArray: any;
  idList: string[] = [];

  constructor(
    private googlebooksService: GooglebooksService,
    private bookshelfService: BookshelfService
  ) { }

  ngOnInit(): void {
    if(this.listTitle == 'completed') {
      this.addToIdListCompleted();
      // this.addtoBookArray();

    } else if (this.listTitle == 'reading') {
      this.addToIdListReading()
      // this.addtoBookArray()

    } else if (this.listTitle == 'wishlist') {
      this.addToIdListWishList()
      // this.addtoBookArray()
    }
    

  }

  addtoBookArray() {
    console.log("array",this.idList);
    this.idList.forEach(async (element) => {
      await console.log("id",element)
      await this.getOne(element);
    });
  }

  addToIdListCompleted(): void {
    this.bookshelfService.getShelfCompleted()
        .subscribe(data => {
          //push all id's to array
          data.forEach(async (book: { bookId: string; }) => {
            let str = book.bookId;
            await console.log(str)
            // await this.idList.push(str)
          });
          this.addtoBookArray()
        }, err => {
          console.log(err)
        }
      )
  }
  addToIdListReading(): void {
    this.bookshelfService.getShelfReading()
        .subscribe(data => {
          console.log(data);
          //push all id's to array
          this.idList.push(data.bookId)
        }, err => {
          console.log(err)
        }
      )
  }
  addToIdListWishList(): void {
    this.bookshelfService.getShelfwishList()
        .subscribe(data => {
          console.log(data);
          //push all id's to array
          this.idList.push(data.bookId)
        }, err => {
          console.log(err)
        }
      )
  }

  showListToggle(): void {
    this.showList = !this.showList;
  }
  getOne(id: any): void {
    this.googlebooksService.getshelfItem(id)
      .subscribe(
        data => {
          console.log("DETAIL: ", data);
          this.bookArray.push(data)
        },
        err => {
          console.log(err);
        }
      )
  }



}
