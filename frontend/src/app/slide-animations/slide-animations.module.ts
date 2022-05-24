import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SlideAnimationsModule { 

  addSlideAnimation(direction: string) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add(`slide-${direction}`);
            }
        });
    }, {threshold: 0.5})
    document.querySelectorAll(`.onscroll-slide-${direction}`).forEach(element => {
        observer.observe(element);    
    });    
  }

  includeAll() {
    this.addSlideAnimation('right');
    this.addSlideAnimation('left');
    this.addSlideAnimation('top');
    this.addSlideAnimation('bottom');
  }

}
