import {Component, Input, OnInit} from '@angular/core';
import {AddressesService} from '../addresses.service';
import {User} from '../user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
