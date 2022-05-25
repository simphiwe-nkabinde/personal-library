import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/models/bookNote.model';

@Component({
  selector: 'app-book-note-modal',
  templateUrl: './book-note-modal.component.html',
  styleUrls: ['./book-note-modal.component.scss']
})
export class BookNoteModalComponent implements OnInit {

  @Input() note: Note = {} as Note;
  editContent: boolean = false;
  editTitle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
  editContentToggle() {
    this.editContent = !this.editContent;
  }
  editTitleToggle(bool:boolean) {
    this.editTitle = bool
  }
  updateTitle() {
    this.editTitleToggle(false)
    //use service to update the note title in database
  }
}
