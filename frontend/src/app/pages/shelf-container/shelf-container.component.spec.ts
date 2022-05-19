import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfContainerComponent } from './shelf-container.component';

describe('ShelfContainerComponent', () => {
  let component: ShelfContainerComponent;
  let fixture: ComponentFixture<ShelfContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShelfContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
