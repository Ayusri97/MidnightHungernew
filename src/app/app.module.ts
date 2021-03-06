import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenusComponent } from './menus/menus.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CreateAccComponent } from './create-acc/create-acc.component';
import { CustomerComponent } from './customer/customer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AccountServiceService } from './account-service.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewAccountsComponent } from './view-accounts/view-accounts.component';
import { ContactServiceService } from './contactservice.service';
import { FooterComponent } from './footer/footer.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AddProductComponent } from './add-product/add-product.component';
import { BreakfastServiceService } from './breakfast-service.service';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { PlaceOrderComponent } from './place-order/place-order.component';




const appRoute:Routes=[
 
  {path:'Home',component:HomeComponent},
   {path:'Menu',component:SubmenuComponent},
   {path:'AboutUs',component:AboutComponent},
   {path:'Contact',component:ContactComponent},
   {path:'SignUp',component:CreateAccComponent},
   {path:'Customer',component:CustomerComponent},
   {path:'Admin',component:AdminComponent},
   {path:'AdminLogin',component:AdminLoginComponent},
   {path:'view-accounts',component:ViewAccountsComponent},
   {path:'view-feedback',component:ViewFeedbackComponent},
   {path:'AddProduct',component:AddProductComponent},
   {path:'CustomerHome',component:CustomerHomeComponent},
   {path:'PlaceOrder',component:PlaceOrderComponent},
   
   
   
   
   
   
   
   
   
   {path:'',component:HomeComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenusComponent,
    AboutComponent,
    ContactComponent,
    CreateAccComponent,
    CustomerComponent,
    AdminComponent,
    AdminLoginComponent,
    ViewAccountsComponent,
    FooterComponent,
    AdminMenuComponent,
    SubmenuComponent,
    ViewFeedbackComponent,
    AddProductComponent,
    CustomerHomeComponent,
    PlaceOrderComponent,
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(appRoute),HttpClientModule,HttpModule
  ],
  providers: [AccountServiceService, ContactServiceService,BreakfastServiceService,],
  bootstrap: [AppComponent,]
})
export class AppModule { }
