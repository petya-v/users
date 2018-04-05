export interface AddressDetails {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}

export class Address {
  id: number;
  userid: number;
  details: AddressDetails;


  constructor(id: number, userid: number, details: AddressDetails) {
    this.id = id;
    this.userid = userid;
    this.details = details;
  }
}
