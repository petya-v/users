import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  addUser(name: string, username: string, age: number){
    this.usersService.addUserToDB(new User(username, name, age))
      .subscribe();
  }

}
