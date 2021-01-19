import { Input, Component, OnInit } from '@angular/core';

import { Person } from '../person'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [''],
})
export class ContactComponent implements OnInit {
  @Input() contact: Person;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
