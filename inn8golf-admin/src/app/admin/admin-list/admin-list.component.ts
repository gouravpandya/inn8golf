import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

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
      responsive: true,
      lengthMenu: [5, 10, 15, 20, 25],
      columnDefs: [{ "orderable": false, "targets": 3 }]
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
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your record is safe :)',
        //   'error'
        // )
      }
    });
  }

  modalClose(): void {
  }

  disableAdmin(): void {
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, disable it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Disabled!',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Swal.fire(
        //   'Cancelled',
        //   'Your record is safe :)',
        //   'error'
        // )
      }
    });
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
