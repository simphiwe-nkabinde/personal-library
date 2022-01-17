import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-container',
  templateUrl: './shelf-container.component.html',
  styleUrls: ['./shelf-container.component.scss']
})
export class ShelfContainerComponent implements OnInit {

  listTitle = {
    completed: 'completed',
    reading: 'reading',
    wishlist: 'wishlist'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
