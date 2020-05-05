import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'testing for serverName';

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created!';
  }
  onUpdateServerName(event: any){
    console.log(`event:`, event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
