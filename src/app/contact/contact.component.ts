import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contactservice.service';
import { Contact } from '../ContactClass';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private objContact: Contact;

  constructor(private q: ContactServiceService) { }

  ngOnInit() {
  }

  AddNewContact = function (con) {
    this.objContact = {
      "Name": con.Name,
      "Phone": con.Phone,
      "Email": con.Email,
      "Message": con.Message
    }
    this.q.createConData(this.objContact).subscribe()

  }

}
