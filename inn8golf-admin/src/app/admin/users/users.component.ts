import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from './users.service';
import { User } from './users.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit, OnDestroy {
  userList: User[] = [];
  user: User;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<User> = new Subject();
  modalMessage: string;
  modalTitle: string;

  constructor(private userService: UserService, private router: Router) {
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
      responsive: true,
      lengthMenu: [5, 10, 15, 20, 25],
      columnDefs: [{ "orderable": false, "targets": 3 }]
    };
    this.userList = [
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
      { name: 'sad', email: 'asdasd' },
    ];
    this.dtTrigger.next();

  }

  deleteUser(): void {
    this.modalMessage = 'Are you sure you want to delete user ?';
    this.modalTitle = 'Confirmation';
  }

  modalClose(): void {
  }

  disableUser(): void {
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
