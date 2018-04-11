import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AddressesService} from '../addresses.service';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
  }
  @Input() user: User;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  removeUser(id: number){
    this.usersService.removeUserFromDB(id).subscribe();
  }

}
