import { Component, OnInit } from '@angular/core';


import { ContactService } from '../../services/contact.service';
import { Contact } from '../../../../shared/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  dataService: ContactService; 

  constructor(private ContactService: ContactService) {
    this.dataService = this.ContactService;
   }

  ngOnInit() {
    this.contacts = this.ContactService.contacts;
  }

}
