import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<User> = [];
  @Output() user = new EventEmitter<User>();

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.refreshUsers();
    this.users = this.userService.getUsers();
  }

  onButtonInfoClicked(user: User) {
    this.user.emit(user);
  }
  getUsers() {
    this.users = this.userService.getUsers();
  }

  refreshUsers(){
    this.userService.refreshUsers();
    this.users = this.userService.getUsers();
  }

}
