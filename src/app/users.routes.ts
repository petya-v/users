import {Routes} from '@angular/router';
import {UserDetailComponent} from './user-detail/user-detail.component';
import {UsersComponent} from './users/users.component';

export const userRouts: Routes = [
  { path: '', redirectTo: 'users-list', pathMatch: 'full' },
  {path : 'user-details/:userId', component : UserDetailComponent},
  {path : 'users-list', component : UsersComponent}
];
