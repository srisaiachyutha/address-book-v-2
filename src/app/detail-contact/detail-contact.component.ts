import { Input, Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

import { Person } from '../person';
import { ContactDataService } from '../contact-data.service'
@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.scss']
})
export class DetailContactComponent implements OnInit {
  //@Input() index: number;
  index: number;
  selectedContact: Person;
  constructor(private contactDataService: ContactDataService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    //this.index = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.index = parseInt(params.get('id'));
      this.selectedContact = this.contactDataService.getContact(this.index)
      console.log(this.index);
    });


  }

  deleteContact() {
    this.contactDataService.deleteContact(this.index);
    this.router.navigate(['/']);
    console.log(' i am deleting the contact');
  }

  editContact() {

    this.router.navigate(['/form/contactedit', this.index]);
  }

}
