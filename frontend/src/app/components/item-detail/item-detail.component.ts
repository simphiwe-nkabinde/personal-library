import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookshelfService } from 'src/app/services/bookshelf.service';
import { GooglebooksService } from 'src/app/services/googlebooks.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  bookItem: any;
  shelfInput = new FormControl('');
  notesInput = new FormControl('')

  constructor(
    private googlebooksService: GooglebooksService,
    private bookshelfService: BookshelfService
  ) { }

  ngOnInit(): void {
    this.googlebooksService.getItem()
      .subscribe(
        data => {
          console.log("DETAIL: ", data);
          this.bookItem = data;
        },
        err => {
          console.log(err);
        }
      )
  }
  getfromBookshelf(): void {
    this.bookshelfService.getOne()
      .subscribe(data => {
        console.log(data)
      }, err => {
        console.log(err);
      })
  }
  updateShelf(): void {
    let data = {
      shelf: this.shelfInput.value
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

}
