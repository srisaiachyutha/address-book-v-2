import { Input, Component, OnInit } from '@angular/core';

import { Person } from '../person'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input() contact: Person;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
