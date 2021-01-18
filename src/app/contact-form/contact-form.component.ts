import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from "../person";
import { ContactDataService } from "../contact-data.service"
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  fillFormWithContact: Person;
  contactForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    landLine: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    houseAdd: new FormControl('', [Validators.required])

  });
  constructor(private messageService: MessageService, private router: Router, private route: ActivatedRoute, private contactDataService: ContactDataService) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      let index = parseInt(this.route.snapshot.paramMap.get('id'));
      this.fillFormWithContact = this.contactDataService.getContact(index);
      this.contactForm.patchValue({
        userName: this.fillFormWithContact.userName,
        email: this.fillFormWithContact.emailId,
        mobile: this.fillFormWithContact.mobileNumber,
        landLine: this.fillFormWithContact.landlineNumber,
        website: this.fillFormWithContact.websiteAddress,
        houseAdd: this.fillFormWithContact.houseAddress


      });

      //console.log('i am called in onInit form');
    } else {
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
      //console.log('old contact is updated');

    } else {
      // its a new one
      this.contactDataService.addNewContact(person);
      //console.log('new contact is added');
    }
    this.router.navigate(['/']);
  }
}
