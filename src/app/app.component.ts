import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:'';
  showSecretPassword = false;
  logOne = [];
  log = [];

  onToggleDetails(){
    this.showSecretPassword = !this.showSecretPassword;
    this.logOne.push(this.logOne.length + 1);
    this.log.push(new Date());
  }
}
