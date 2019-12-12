import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from './users.service';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  userList: User[] = [];
  user: User;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<User> = new Subject();

  constructor(private userService: UserService,
    private router: Router) {
    this.user = new User();
  }

  ngOnInit() {
    this.initialize();
    
  }

  addUser(): void {

  }

  private initialize(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      paging: true,
      searching: true,

    };
    this.userList = [
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
      {name: "sad", email:'asdasd'},
    ]
    this.dtTrigger.next();

  }

  private handleError(errorCode: number): void {
    if (errorCode === 401) {
      this.router.navigateByUrl('/error');
    }
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
