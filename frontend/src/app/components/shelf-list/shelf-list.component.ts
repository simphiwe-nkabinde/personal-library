import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelf-list',
  templateUrl: './shelf-list.component.html',
  styleUrls: ['./shelf-list.component.scss']
})
export class ShelfListComponent implements OnInit {

  showList:boolean = true;

  @Input() listTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  showListToggle(): void {
    this.showList = !this.showList;
  }

}
