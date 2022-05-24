import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-container',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss']
})
export class ShelfComponent implements OnInit {

  listTitle = {
    completed: 'completed',
    reading: 'reading',
    wishlist: 'wishlist'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
