import { Component, OnInit } from '@angular/core';
 import { AccountServiceService } from '../account-service.service';
 import { Account } from '../AccountClass';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {

  private objAccount: Account;

  constructor(private q: AccountServiceService ,private route: Router) { }

  ngOnInit() {
   this.GetAccList();
 }
 GetAccList() {
  this.q.GetAccData().subscribe(
    data => {
      // console.log(data);
      this.objAccount = data['msg'];
    }
  )
}

    }
   