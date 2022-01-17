import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GooglebooksService } from 'src/app/services/googlebooks.service';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  bookResults: object[] = []
  searchInput = new FormControl('');
  bookResultsLength: number = 1;
  lastSearch: string = '';

  constructor(
    private googlebooksService: GooglebooksService
  ) { }

  ngOnInit(): void {
    this.searchVolume()
  }

  searchVolume(): void {
    if(this.searchInput.value === '') {
      this.bookResultsLength = 1;
      return;
    }
    this.bookResultsLength = 0;
    this.googlebooksService.getVolume(this.searchInput.value).subscribe(
      data => {
        console.log(data);
        this.bookResults = data.items;
        this.bookResultsLength = data.items.length;
      },
      err => {
        console.log(err);
      }
    )
  }

}
