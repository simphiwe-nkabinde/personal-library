import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNoteModalComponent } from './book-note-modal.component';

describe('BookNoteModalComponent', () => {
  let component: BookNoteModalComponent;
  let fixture: ComponentFixture<BookNoteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNoteModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNoteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
