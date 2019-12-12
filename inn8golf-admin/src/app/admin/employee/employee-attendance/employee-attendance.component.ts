import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { ZoneService } from '../../zone/zone.service';
import { Zone } from '../../zone/zone.model';
import { EmployeeAttendance } from '../model/employee-attendance.model';
import { BuildingLevelService } from '../../building-level/building-level.service';
import { Building } from '../../building-level/building-level.model';
import { EmployeeAttendanceService } from './employee-attendance.service';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {
  employeeList: Employee[];
  zoneList: Zone[];
  employee: Employee;
  employeeAttendance: EmployeeAttendance;
  employeeAttendanceList: EmployeeAttendance[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Employee> = new Subject();
  siteRefNo = '123456';
  buildingList: Building[] = [];
  date = new Date();
  selectedDate = [];
  //rangeDates: Date[];
  constructor(private buildingService: BuildingLevelService, private employeeService: EmployeeService,
    private zoneService: ZoneService, private empAttendanceService: EmployeeAttendanceService, private router: Router) {
    this.employee = new Employee();
    this.employeeAttendance = new EmployeeAttendance();
  }
  ngOnInit() {
    this.initialize();
  }
  onChange(data: Date) {
 
    // if (data.length == 2) {
    //   debugger;
    //   this.employeeAttendance.fromDate = data[0];
    //   this.employeeAttendance.toDate = data[1];
    //   console.log(this.employeeAttendance.fromDate);
    // }
    // else
    //   this.employeeAttendance.fromDate = data[0];
  }
  onSubmit(): void {

    this.empAttendanceService.post(this.employeeAttendanceList).subscribe((empAttendanceResponse) => {
      if (empAttendanceResponse.status === 200 && !empAttendanceResponse.body.didError) {

        // this.tenantForm.reset();
        // this.tenant = new Tenant();
        Swal.fire('Success', empAttendanceResponse.body.message, 'success');
        this.get();
      } else {
        Swal.fire('Error', empAttendanceResponse.body.errorMessage, 'error');
      }
    }, (error) => {
      this.handleError(error);
    },
    );
  }

  dates: any;
  getEmployees(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.employeeService.getEmployeesById(this.employeeAttendance.zoneId).subscribe((employeeResponse) => {
      if (employeeResponse.status === 200 && !employeeResponse.body.didError) {
        this.employeeList = employeeResponse.body.model;
        this.employeeList.forEach(e => {
          this.selectedDate.push(new Date(e.fromDate));
          this.selectedDate.push(new Date(e.toDate));
          e.rangeDates = [...this.selectedDate];
          this.selectedDate = [];

        });
        this.dtTrigger.next();
      }
      console.log(this.employeeList);
    });
  }
  getBuildings(): void {
    this.buildingService.get('123456').subscribe((deviceResponse) => {
      if (deviceResponse.status === 200 && !deviceResponse.body.didError) {
        this.buildingList = deviceResponse.body.model;
      }
    });
  }


  getZonesByBuildingId(): void {
    this.zoneService.getZonesByBuildingId(this.employeeAttendance.buildingId).subscribe((zoneResponse) => {
      if (zoneResponse.status === 200 && !zoneResponse.body.didError) {
        this.zoneList = zoneResponse.body.model;

      }
    });
  }

  markEmployeeAbsent(event, employee) {
    if (event.target.checked) {
      let empAttendance = new EmployeeAttendance();
      empAttendance.employeeAbsentismId = 0,
        empAttendance.fK_EmployeeId = employee.employeeId,
        empAttendance.isAbsent = true;
      if (employee.rangeDates.length == 2) {
        empAttendance.fromDate = employee.rangeDates[0];
        empAttendance.toDate = employee.rangeDates[1];
      }
      else {
        this.employeeAttendance.fromDate = employee.rangeDates[0];
      }
      this.employeeAttendanceList.push(empAttendance);
    }
    else {
      const item = this.employeeAttendanceList.find(e => e.fK_EmployeeId === employee.employeeId);
      if (item != null)
        this.employeeAttendanceList.splice(this.employeeAttendanceList.indexOf(item), 1);
    }
  }
  private initialize(): void {
    this.getBuildings();
    this.get();

  }

  private get(): void {

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
