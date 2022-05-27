import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SlideAnimationsModule } from 'src/app/slide-animations/slide-animations.module';
declare let google: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    public slideAnimation: SlideAnimationsModule,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.slideAnimation.includeAll();
    if (!sessionStorage.getItem('USER_LOGGED')) {
      this.renderSigninButton()
    }
  }

  renderSigninButton() {
    google.accounts.id.initialize({
      client_id: "179512870057-p4q575l99rbb1q2atg5mm061gm72qvtk.apps.googleusercontent.com",
      callback: this.authService.signin
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    // google.accounts.id.prompt(); // also display the One Tap dialog
  }
}
