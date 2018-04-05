import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsersFromDB() {
    return this.http.get('http://192.168.0.100:3000/users')
      .map(response => response.json()
        .map(jsonUser => new User(jsonUser.id, jsonUser.username, jsonUser.name, jsonUser.age)));
  }

}
