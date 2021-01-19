import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Person } from "../person";
import { ContactDataService } from "../contact-data.service"
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styles: ['']
})
export class ContactFormComponent implements OnInit {

  contact: Person;
  contactForm: FormGroup;

  constructor(private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute,
    private contactDataService: ContactDataService) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      let index = parseInt(this.route.snapshot.paramMap.get('id'));
      this.contact = this.contactDataService.getContact(index);
      this.buildContactForm(this.contact);
    } else {
      this.buildContactForm();
      this.messageService.modifySelectedBackground();
    }
  }

  addOrUpdate() {
    let person = new Person({
      name: this.contactForm.get('userName').value,
      email: this.contactForm.get('email').value,
      mobile: this.contactForm.get('mobile').value,
      land: this.contactForm.get('landLine').value,
      web: this.contactForm.get('website').value,
      house: this.contactForm.get('houseAdd').value
    });

    if (this.route.snapshot.paramMap.get('id') != null) {
      // editing the old one
      let index = parseInt(this.route.snapshot.paramMap.get('id'));
      this.contactDataService.updateContact(person, index);
    } else {
      // its a new one
      this.contactDataService.addNewContact(person);
    }
    this.router.navigate(['/']);
  }

  buildContactForm(contactDetails = null) {
    this.contactForm = new FormGroup({
      userName: new FormControl(contactDetails ? contactDetails.userName : '', [Validators.required]),
      email: new FormControl(contactDetails ? contactDetails.emailId : '', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      mobile: new FormControl(contactDetails ? contactDetails.mobileNumber : '', [Validators.required, Validators.minLength(10)]),
      landLine: new FormControl(contactDetails ? contactDetails.landlineNumber : '', [Validators.required]),
      website: new FormControl(contactDetails ? contactDetails.websiteAddress : '', [Validators.required]),
      houseAdd: new FormControl(contactDetails ? contactDetails.houseAddress : '', [Validators.required])
    });
  }

}
