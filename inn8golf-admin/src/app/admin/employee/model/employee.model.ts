import { EmployeeAttendance } from './employee-attendance.model';

export class Employee {
    employeeId: number;
    employeeFirstName: string;
    employeeLastName: string;
    employeeEmail: string;
    fK_ZoneId: number;
    fK_RoleId: number;
    rangeDates: Date[];
    employeeAbsentismId: number;
    isAbsent: boolean;
    fromDate: Date;
    toDate: Date;

    constructor(data?: Employee) {
        if (data) {
            this.employeeId = data.employeeId;
            this.employeeFirstName = data.employeeFirstName;
            this.employeeLastName = data.employeeLastName;
            this.employeeEmail = data.employeeEmail;
            this.fK_ZoneId = data.fK_ZoneId;
            this.fK_RoleId = data.fK_RoleId;
            this.rangeDates = data.rangeDates;
            this.employeeAbsentismId = data.employeeAbsentismId;
            this.isAbsent = data.isAbsent;
            this.fromDate = data.fromDate;
            this.toDate = data.toDate;
            this.rangeDates =[];
        } else {
            this.employeeId = 0;
            this.employeeFirstName = '';
            this.employeeLastName = '';
            this.employeeEmail ='';
            this.fK_ZoneId = 0;
            this.fK_RoleId = 0;
            this.rangeDates = [];
            this.employeeAbsentismId = 0;
            this.isAbsent = false;
            this.fromDate = new Date;
            this.toDate = new Date;
            
            
        }
    }
}