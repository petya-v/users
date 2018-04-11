import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Address} from './address';
import {AddressDetails} from './address';

@Injectable()
export class AddressesService {

  constructor(private http: Http) { }

  getAddresses(userId: number) {
    return this.http.get('http://192.168.0.102:3000/addresses?userid=' + userId)
      .map(response => response.json()
        .map(jsonAddress => new Address(jsonAddress.id, jsonAddress.userId, jsonAddress.details)));

  }

}
