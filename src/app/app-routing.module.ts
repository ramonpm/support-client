import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthComponent} from './auth-dialog/auth.component';
import {TicketsComponent} from './tickets/tickets.component';

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
    data: { stateName: 'tickets' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
