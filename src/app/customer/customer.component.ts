import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { Account } from '../AccountClass';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private objemp: Account;
  msg: string = "Invalid User Name or Password!";
  isAdded: boolean = false;

  constructor(private q: AccountServiceService, private route: Router) { }


  ngOnInit() {
  }
  LoginEmployee = function (emp) {
    this.objemp = {
      "Email": emp.Email,
      "Password": emp.Password,
    }
    this.q.userLogin(this.objemp).subscribe(
      success => {
        this.empObj = success['msg'];
        if (this.empObj == "") {
          this.isAdded = true;
        }
        else {
          localStorage.setItem("UserData", JSON.stringify(this.empObj));
          this.route.navigate(['/CustomerHome'])
        }
      },
      error => {
        this.isAdded = true;
      }
    );
  }
}