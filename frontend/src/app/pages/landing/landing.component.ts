import { Component, OnInit } from '@angular/core';
import { SlideAnimationsModule } from 'src/app/slide-animations/slide-animations.module';
declare let google: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public slideAnimation: SlideAnimationsModule) { }

  ngOnInit(): void {
    this.slideAnimation.includeAll();
    this.renderSigninButton()
  }

  renderSigninButton() {
    google.accounts.id.initialize({
      client_id: "179512870057-p4q575l99rbb1q2atg5mm061gm72qvtk.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }


  handleCredentialResponse(response: any) {
    // decodeJwtResponse() is a custom function defined by you
    // to decode the credential response.
    console.log(response);
    // const responsePayload = decodeJwtResponse(response.credential);

    // console.log("ID: " + responsePayload.sub);
    // console.log('Full Name: ' + responsePayload.name);
    // console.log('Given Name: ' + responsePayload.given_name);
    // console.log('Family Name: ' + responsePayload.family_name);
    // console.log("Image URL: " + responsePayload.picture);
    // console.log("Email: " + responsePayload.email);
  }

}
