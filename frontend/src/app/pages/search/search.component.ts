import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GooglebooksService } from 'src/app/services/googlebooks.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-items',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  bookResults: object[] = []
  // searchInput = new FormControl('');
  loading: boolean = false;
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
    if(this.searchInput.value) {
      this.loading = true;
      sessionStorage.setItem("lastSearch", this.searchInput.value)  //update search memory
      this.googlebooksService.getVolume(this.searchInput.value)
        .subscribe(
          data => {
            this.bookResults = data.items;
            if(data.items.length) {
              this.loading = false;
            }
          },err => {console.log(err);}
        )
    } else {
      this.loading = false;
      this.bookResults = [];
    }
  }
}
