import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Angular2TokenService} from 'angular2-token';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {AuthComponent} from './auth-dialog/auth.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {RegisterFormComponent} from './register-form/register-form.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketFormComponent} from './ticket-form/ticket-form.component';
import {TicketShowComponent} from './ticket-show/ticket-show.component';
import {UsersComponent} from './users/users.component';
import {AdminGuard} from './guards/admin.guard';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    TicketsComponent,
    TicketFormComponent,
    TicketShowComponent,
    UsersComponent
  ],
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [Angular2TokenService, AuthService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
