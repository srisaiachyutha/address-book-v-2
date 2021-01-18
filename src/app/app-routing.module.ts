import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DetailContactComponent } from "./detail-contact/detail-contact.component";
const routes: Routes = [

  { path: 'form', component: ContactFormComponent },
  { path: 'form/contactedit/:id', component: ContactFormComponent },
  { path: 'contact/:id', component: DetailContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
