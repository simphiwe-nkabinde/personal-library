import { Component, OnInit } from '@angular/core';
import { GooglebooksService } from 'src/app/services/googlebooks.service'

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  bookItem: any;

  constructor(
    private googlebooksService: GooglebooksService
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

}
