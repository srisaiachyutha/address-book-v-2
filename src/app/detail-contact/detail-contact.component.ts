import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { Person } from '../person';
import { ContactDataService } from '../contact-data.service'

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styles: ['']
})
export class DetailContactComponent implements OnInit {

  index: number;
  selectedContact: Person;

  constructor(private contactDataService: ContactDataService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = parseInt(params.get('id'));
      this.selectedContact = this.contactDataService.getContact(this.index);
    });
  }

  deleteContact() {
    this.contactDataService.deleteContact(this.index);
    this.router.navigate(['/']);
  }

  editContact() {
    this.router.navigate(['/contact/edit', this.index]);
  }

}
