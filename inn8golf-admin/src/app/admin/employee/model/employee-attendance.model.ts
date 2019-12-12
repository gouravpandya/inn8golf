export class EmployeeAttendance {
     employeeAbsentismId: number;
     fK_EmployeeId: number;
     isAbsent: boolean;
     fromDate: Date;
     toDate: Date;
     date: Date[];
     buildingId: number;
     zoneId: number;

     constructor() {
          this.employeeAbsentismId = 0;
          this.fK_EmployeeId = 0;
          this.isAbsent = false;
          this.fromDate = new Date;
          this.toDate = new Date;
          this.buildingId = 0;
          this.zoneId = 0;
     }
}