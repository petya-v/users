import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class UsersService {
  users: Array<User> = [];

  constructor(private http: Http) {}

  refreshUsers() {
    this.users = [];
    this.http.get('http://192.168.0.102:3000/users')
      .map(response => response.json()
        .map(jsonUser => {
          let user: User;
          user = new User(jsonUser.username, jsonUser.name, jsonUser.age,jsonUser.id,);
          this.users.push(user);
        }))
      .subscribe();
  }

  getUsers(){
    return this.users;
  }

  addUserToDB(user: User) {
    return this.http.post('http://192.168.0.102:3000/users', new User(user.username, user.name, user.age));
  }

  removeUserFromDB(idUser: number) {
    return this.http.delete('http://192.168.0.102:3000/users/' + idUser);
  }

}
