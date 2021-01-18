import { Injectable } from '@angular/core';

import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class ContactDataService {
  data: Person[] = [
    new Person({
      name: 'Chandermani Arora', email: 'chandarmani@technovert.com', mobile: '9292929292', land: '929292', web: 'www.technovert.com', house: `123 now here <br>
    Somestreet <br>
    Madhapur, hyderabad , 500033`}),
    new Person({
      name: 'Sasi Pagadala', email: 'sasaipagadala@technovert.com', mobile: '9292929292', land: '929292', web: 'www.technovert.com', house: `123 now here <br>
    Somestreet <br>
    Madhapur, hyderabad , 500033`}),
    new Person({
      name: 'Praveen Batula', email: 'praveenbatula@technovert.com', mobile: '9292929292', land: '929292', web: 'www.technovert.com', house: `123 now here <br>
    Somestreet <br>
    Madhapur, hyderabad , 500033`}),
    new Person({
      name: 'vijay yalamanchili', email: 'vijayyalamanchili@technovert.com', mobile: '9292929292', land: '929292', web: 'www.technovert.com', house: `123 now here <br>
    Somestreet <br>
    Madhapur, hyderabad , 500033`})
  ];

  constructor() { }
  getContacts(): Person[] {
    return this.data;
  }
  getContact(index: number): Person {
    return this.data[index];
  }
  deleteContact(index: number) {
    if (index != undefined) {
      this.data.splice(index, 1);
    }

  }
  updateContact(person: Person, index: number) {
    this.data[index] = person;
  }

  addNewContact(person: Person) {
    this.data.push(person);
  }
}
