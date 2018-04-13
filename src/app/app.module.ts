import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddressComponent } from './user-detail/address/address.component';
import {UsersService} from './users.service';
import {AddressesService} from './addresses.service';
import {HttpModule} from '@angular/http';
import { AddUserComponent } from './add-user/add-user.component';
import {RouterModule} from '@angular/router';
import {userRouts} from './users.routes';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    AddressComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(userRouts)
  ],
  providers: [UsersService, AddressesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
