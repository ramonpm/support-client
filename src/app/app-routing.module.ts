import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from './auth-dialog/auth.component';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketFormComponent} from './ticket-form/ticket-form.component';
import {TicketShowComponent} from './ticket-show/ticket-show.component';
import {UsersComponent} from './users/users.component';
import {AdminGuard} from './guards/admin.guard';
import {RegisterFormComponent} from './register-form/register-form.component';
import {Angular2TokenService} from 'angular2-token';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent,
    data: {stateName: 'login'}
  },
  {
    path: 'register',
    component: AuthComponent,
    data: {stateName: 'register'}
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: {stateName: 'tickets'},
    canActivate: [Angular2TokenService]
  },
  {
    path: 'tickets/new',
    component: TicketFormComponent,
    data: {stateName: 'new-ticket'},
    canActivate: [Angular2TokenService]
  },
  {
    path: 'tickets/:id/edit',
    component: TicketFormComponent,
    data: {stateName: 'edit-ticket'},
    canActivate: [Angular2TokenService]
  },
  {
    path: 'tickets/:id/show',
    component: TicketShowComponent,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [Angular2TokenService, AdminGuard]
  },
  {
    path: 'users/new',
    component: RegisterFormComponent,
    data: {stateName: 'admin-new-user'},
    canActivate: [Angular2TokenService, AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
