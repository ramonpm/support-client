import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth-dialog/auth.component';
import {TicketsComponent} from './tickets/tickets.component';
import {AuthGuard} from './guards/auth.guard';
import {TicketFormComponent} from './ticket-form/ticket-form.component';
import {TicketShowComponent} from "./ticket-show/ticket-show.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent,
    data: { stateName: 'login' }
  },
  {
    path: 'register',
    component: AuthComponent,
    data: { stateName: 'register' }
  },
  {
    path: 'tickets',
    component: TicketsComponent,
    data: { stateName: 'tickets' },
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets/new',
    component: TicketFormComponent,
    data: { stateName: 'new-ticket' },
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets/:id/edit',
    component: TicketFormComponent,
    data: { stateName: 'edit-ticket' },
    canActivate: [AuthGuard]
  },
  {
    path: 'tickets/:id/show',
    component: TicketShowComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
