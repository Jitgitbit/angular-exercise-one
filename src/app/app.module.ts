import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';                                    //needed for 2-way binding

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccesAlertComponent } from './succes-alert/succes-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccesAlertComponent,
    WarningAlertComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                                                                    //needed for 2-way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
