import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GooglebooksService } from 'src/app/services/googlebooks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  bookResults: object[] = []
  searchInput = new FormControl('');
  bookResultsLength: number = 1;
  lastSearch: any;

  constructor(
    private googlebooksService: GooglebooksService,
    private location: Location
  ) { 
    this.location.onUrlChange(url => {
      this.searchInput.setValue(this.lastSearch);
      this.searchVolume()
    })
  }

  ngOnInit(): void {
    this.searchVolume()
  }

  searchVolume(): void {
    this.lastSearch = this.searchInput.value;

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
