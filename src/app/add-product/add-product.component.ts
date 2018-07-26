import { Component, OnInit } from '@angular/core';
import { BreakfastServiceService } from '../breakfast-service.service';
import { Breakfast } from '../BreakfastClass';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private brkfstObj: Breakfast;
  constructor(private q: BreakfastServiceService) { }

  ngOnInit() {
  }
  AddProduct = function (pd) {
    console.log(pd.Category,pd.Item,pd.Price);
    this.brkfstObj = {
      "Category": pd.Category,
      "Item": pd.Item,
      "Price": pd.Price
    }
    this.q.createBrkfstData(this.brkfstObj).subscribe()

  }
}