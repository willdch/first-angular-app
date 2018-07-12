import { Injectable } from '@angular/core';
import { Contact } from '../../../shared/models/contact';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [
    {
      firstName: 'Jarin',
      lastName: 'Dykstra',
      phoneNumber: '405-555-5555',
      email: 'Jarin.Dykstra@lifenet.net'
    },

    {
      firstName: 'John',
      lastName: 'Wayne',
      phoneNumber: '405-555-5554',
      email: 'John@lifenet.net'
    },

    {
      firstName: 'Ilean',
      lastName: 'fallsover',
      phoneNumber: '405-555-5553',
      email: 'Ilean@lifenet.net'
    }
  ];
  constructor() {}
}
