import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/bookNote.model';
import { SlideAnimationsModule } from 'src/app/slide-animations/slide-animations.module';

@Component({
  selector: 'app-book-notes',
  templateUrl: './book-notes.component.html',
  styleUrls: ['./book-notes.component.scss']
})
export class BookNotesComponent implements OnInit {

  noteList: Note[] = [
    {
      title: 'Chapter 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      title: 'Chapter 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Chapter 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.',
      createdAt: new Date(),
      updatedAt: new Date()
    }, 
    {
      title: 'Chapter 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae accusamus voluptate commodi vero eligendi nihil obcaecati iste nam! Asperiores, molestias. Quae numquam ut odit repudiandae facere veniam, exercitationem adipisci quo officia perspiciatis sit totam assumenda natus expedita sed incidunt nisi libero quidem iusto non placeat nesciunt corrupti. Laboriosam, consectetur.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]

  selectedNote: Note = {} as Note;

  constructor(public slideAnimation: SlideAnimationsModule) { }

  ngOnInit(): void {
    this.slideAnimation.includeAll()
  }

  displayModal(index: number) {
    //create new note
    if (index == -1) {
      this.selectedNote =  {
        title: 'Tilte',
        createdAt: new Date(),
        updatedAt: new Date(),
        content: 'add content..'
      };
      // display selected note
    } else { this.selectedNote = this.noteList[index] }

    document.getElementById('notes-modal')?.click() 
  }
  
}
