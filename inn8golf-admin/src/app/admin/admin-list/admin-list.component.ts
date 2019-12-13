import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit, OnDestroy {
  adminList: any[] = [];
  user: any;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  modalMessage: string;
  modalTitle: string;

  constructor(private router: Router) {
    // this.user = new User();
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
    this.adminList = [
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

  deleteAdmin(): void {
    this.modalMessage = 'Are you sure you want to delete Admin ?';
    this.modalTitle = 'Confirmation';
  }

  modalClose(): void {
  }

  disableAdmin(): void {
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
