import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  //@Input() user: User;
  user: User;
  userId: number;

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserDetails();
  }

  removeUser(id: number) {
    this.usersService.removeUserFromDB(id).subscribe();
  }

  getUserDetails() {
    this.route.params.subscribe(
      params => {
        this.userId = + params.userId;
        this.user = this.usersService.getUserById(this.userId);
      });
  }

}
