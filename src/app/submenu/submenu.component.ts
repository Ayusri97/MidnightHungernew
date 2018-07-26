import { Component, OnInit } from '@angular/core';
import {Breakfast } from '../BreakfastClass';
import { BreakfastServiceService} from '../breakfast-service.service';
import { Router} from '@angular/router';
@Component({
  selector: 'SubMenu',
  templateUrl: './submenu.component.html',
  styles: []
})
export class SubmenuComponent implements OnInit {

  private brkfstObj1: Breakfast;
  private brkfstObj2: Breakfast;
  private brkfstObj3: Breakfast;
  private brkfstObj4: Breakfast;
  

  constructor(private q:BreakfastServiceService,private route: Router) { }

  ngOnInit() {
    this.GetMenuData1();
    this.GetMenuData2();
    this.GetMenuData3();
    this.GetMenuData4();
    

  }
  GetMenuData1(){
    this.q.GetBrkFastByCat1().subscribe(
      data => {
        this.brkfstObj1 = data['msg'];
      }
    )
  } GetMenuData2(){
    this.q.GetBrkFastByCat2().subscribe(
      data => {
        this.brkfstObj2 = data['msg'];
      }
    )
  }

  GetMenuData3(){
    this.q.GetBrkFastByCat3().subscribe(
      data => {
        this.brkfstObj3 = data['msg'];
      }
    )
  }
  GetMenuData4(){
    this.q.GetBrkFastByCat4().subscribe(
      data => {
        this.brkfstObj4 = data['msg'];
      }
    )
  }
}
