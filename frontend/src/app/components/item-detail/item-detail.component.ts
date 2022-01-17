import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookshelfService } from 'src/app/services/bookshelf.service';
import { GooglebooksService } from 'src/app/services/googlebooks.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  @Input() prevRoute: string = ''
  bookItem: any;
  bookInfo: any;
  shelfInput = new FormControl('');
  notesInput = new FormControl('')

  constructor(
    private googlebooksService: GooglebooksService,
    private bookshelfService: BookshelfService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getBookFromGoogle();
    this.getBookFromBookshelf();
  }

  locationBack(): void {
    this.location.back();
  }


  getBookFromGoogle(): void {
    this.googlebooksService.getItem()
      .subscribe(
        data => {
          this.bookItem = data;
        },
        err => {
          console.log(err);
        }
      )
  }
  getBookFromBookshelf(): void {
    this.bookshelfService.getItem()
      .subscribe(
        data => {
          this.bookInfo = data;
        },
        err => {
          console.log(err);
        }
      )
  }


  getfromBookshelf(): void {
    this.bookshelfService.getItem()
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err);
      })
  }
  updateShelf(newShelf: string): void {
    let data = {
      shelf: newShelf
    }
    this.bookshelfService.update(data)
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err)
      })
  }
  updateNotes(): void {
    let data = {
      notes: this.notesInput.value
    }
    this.bookshelfService.update(data)
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

  deleteItem(): void {
    this.bookshelfService.delete()
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err)
      })
  }

}
