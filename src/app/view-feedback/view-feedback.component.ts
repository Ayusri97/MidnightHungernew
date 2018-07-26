import { Component, OnInit } from '@angular/core';
import { Contact } from '../ContactClass';
import { ContactServiceService } from '../contactservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.css']
})
export class ViewFeedbackComponent implements OnInit {

private objContact: Contact;

  constructor(private q: ContactServiceService ,private route: Router) { }

  ngOnInit() {
    this.GetContactList();

  }
  GetContactList(){
    this.q.GetContactData().subscribe(
      data => {
        // console.log(data);
        this.objContact = data['msg'];
      }
    )
    }

}
