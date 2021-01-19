import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  selected: any

  constructor() { }

  setSelected(value) {
    this.selected = value;
  }

  modifySelectedBackground() {
    if (this.selected) {
      this.selected.classList.remove('contact-selected');
    }
  }
}
