import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  message: string = 'Customer Management System';
 custobj: any = {
   CustomerCode: 1001,
   CustomerName: 'King',
   CustomerAmount : 12000
 }

}
