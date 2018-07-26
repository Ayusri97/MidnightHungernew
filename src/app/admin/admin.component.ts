import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  msg: string = "Invalid Username or Password!";
  isAdded: boolean = false;
  constructor(private route: Router) { }
  ngOnInit() {
  }
  AddNewContact(ld) {
    var email = ld.Email;
    var password = ld.Password;
    if (email == 'admin' && password == 'admin') {
      this.route.navigate(['/AdminLogin'])
    }
    else {
      this.isAdded = true;
    }
  }

}
