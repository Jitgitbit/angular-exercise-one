import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:'';
  showSecretPassword = false;
  log = []

  onToggleDetails(){
    this.showSecretPassword = !this.showSecretPassword;
    this.log.push(this.log.length + 1);
  }
}
