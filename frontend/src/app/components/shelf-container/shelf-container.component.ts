import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-container',
  templateUrl: './shelf-container.component.html',
  styleUrls: ['./shelf-container.component.scss']
})
export class ShelfContainerComponent implements OnInit {

    completed = 'completed';
    reading = 'reading';
    wishlist = 'wishList';

  constructor() { }

  ngOnInit(): void {
  }

}
