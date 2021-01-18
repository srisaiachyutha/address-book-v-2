import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Person } from '../person'
import { ContactDataService } from '../contact-data.service'
import { MessageService } from '../message.service';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  previousSelected: any;
  contacts: Person[] = this.contactDataService.getContacts();
  constructor(private messageService: MessageService, private contactDataService: ContactDataService, private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(event, index) {
    this.router.navigate(['/contact', index]);
    if (this.previousSelected != undefined) {
      this.previousSelected.classList.remove('contact-selected');
    }
    this.previousSelected = event.target.parentNode;
    this.messageService.setSelected(this.previousSelected);
    //console.log(event.target.parentNode);
    event.target.parentNode.classList.add('contact-selected');
  }

}
