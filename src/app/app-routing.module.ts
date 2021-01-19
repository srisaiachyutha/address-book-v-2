import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { DetailContactComponent } from "./detail-contact/detail-contact.component";

const routes: Routes = [
  { path: 'add/contact', component: ContactFormComponent },
  { path: 'contact/edit/:id', component: ContactFormComponent },
  { path: 'deatilContact/:id', component: DetailContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
