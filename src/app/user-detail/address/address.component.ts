import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AddressesService} from '../../addresses.service';
import {Address, AddressDetails} from '../../address';
import {debug} from 'util';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnChanges {
  @Input() userId: number;
  address: Array<Address> = [];

  constructor(private addressesService: AddressesService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAddressById();
  }

  getAddressById() {
    this.addressesService.getAddresses(this.userId)
      .subscribe(address => {
        this.address = address;
      });

  }


}
