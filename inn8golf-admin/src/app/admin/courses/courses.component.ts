import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {
  coursesList: any[] = [];
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
    this.coursesList = [
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
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 5,
      paging: true,
      searching: true,
      responsive: true,
      lengthMenu: [5, 10, 15, 20, 25],
      columnDefs: [{ "orderable": false, "targets": 3 }]
    };
   
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
