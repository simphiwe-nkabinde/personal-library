import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.scss']
})
export class BookNotesComponent implements OnInit {

  notes: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.notes.push(1);  
    }
  }

}
