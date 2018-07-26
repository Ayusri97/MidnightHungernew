import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from '../account-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  constructor(private q:AccountServiceService,private route:Router) { }

  ngOnInit() {
  }
  onlogout() {
    this.q.logout();
    this.route.navigate(['/Customer']);
    return false;
  }
}
