import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { Account } from '../AccountClass';
@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.css']
})
export class CreateAccComponent implements OnInit {
  msg: string="Your account has been creeated successfully.";
  isAdded: boolean=false;
  private objAccount: Account;
  constructor(private q: AccountServiceService) { }

  ngOnInit() {
  }
  AddNewAccount = function (acc) {
    this.objAccount = {
      "Name": acc.Name,
      "Address": acc.Address,
      "Email": acc.Email,
      "Contact": acc.Contact,
      "Password": acc.Password
    }
    this.q.createAccData(this.objAccount).subscribe(data => {
      this.isAdded = true;
    });
  }
}
