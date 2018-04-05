import {Component, Input, OnInit} from '@angular/core';
import {AddressesService} from '../../addresses.service';
import {Address, AddressDetails} from '../../address';
import {debug} from 'util';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() userId: number;
  address: Array<Address> = [];

  constructor(private addressesService: AddressesService) { }

  ngOnInit() {
    this.getAddressById();
  }

  getAddressById() {
    this.addressesService.getAddresses(this.userId)
      .subscribe(address => this.address = address);
    for(const item of this.address){
      console.log(item.id);
    }
    debugger;
  }


}
