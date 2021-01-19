import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Person } from '../person'
import { ContactDataService } from '../contact-data.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: ['']
})
export class ContactListComponent implements OnInit {

  previousSelected: any;
  contacts: Person[] = this.contactDataService.getContacts();

  constructor(private messageService: MessageService,
    private contactDataService: ContactDataService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(event, index) {
    this.router.navigate(['/deatilContact', index]);
    if (this.previousSelected != undefined) {
      this.previousSelected.classList.remove('contact-selected');
    }
    this.previousSelected = event.target.parentNode;
    this.messageService.setSelected(this.previousSelected);
    event.target.parentNode.classList.add('contact-selected');
  }

}
