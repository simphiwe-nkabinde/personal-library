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
  // searchInput = new FormControl('');
  bookResultsLength: number = 1;
  searchInput: FormControl = new FormControl

  constructor(
    private googlebooksService: GooglebooksService,
    private location: Location
  ) { 
    //search memory
    this.location.onUrlChange(url => {
      if (location.path() == '/search') {
        this.searchVolume
      }
    })
  }

  ngOnInit(): void {
    this.searchInput = new FormControl(sessionStorage.getItem("lastSearch"))  //restore from search memory
    this.searchVolume()
  }

  searchVolume(): void {
    if(!this.searchInput.value) {
      this.bookResultsLength = 1;
      return;
    }
    sessionStorage.setItem("lastSearch", this.searchInput.value)  //update search memory

    this.bookResultsLength = 0;
    this.googlebooksService.getVolume(this.searchInput.value).subscribe(
      data => {
        this.bookResults = data.items;
        this.bookResultsLength = data.items.length;
      },
      err => {
        console.log(err);
      }
    )
  }

}
