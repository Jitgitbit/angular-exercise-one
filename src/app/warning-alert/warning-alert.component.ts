import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
    <p>Warning! You are in danger!</p>
  `,
  styles:[
    `
      p{
        padding: 20px;
        background-color: pink;
        border: 1px solid red;
      }
    `
  ]
})
export class WarningAlertComponent {}