import { Component, OnInit } from '@angular/core';
import { SlideAnimationsModule } from 'src/app/slide-animations/slide-animations.module';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public slideAnimation: SlideAnimationsModule) { }

  ngOnInit(): void {
    this.slideAnimation.includeAll();
  }

}
