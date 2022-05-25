import { Component, OnInit } from '@angular/core';
import { SlideAnimationsModule } from 'src/app/slide-animations/slide-animations.module';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.scss']
})
export class BookNotesComponent implements OnInit {

  notes: number[] = [];

  constructor(public slideAnimation: SlideAnimationsModule) { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.notes.push(1);  
    }
    this.slideAnimation.includeAll()
  }

  displayModal() {
    document.getElementById('')
  }

}
