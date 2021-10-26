import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [DataService]
})
export class UsersComponent implements OnInit {

  userList : any;
  title : any;
  constructor( private http : HttpClient, private dataService : DataService) { }

  ngOnInit(): void {
  this.title = this.dataService.title;
 
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(result => {
     // console.log(result);
      this.userList = result;
      console.log( this.userList);
    }, (error) => {console.log('there is some error : '+ error)}
    )};  

}
