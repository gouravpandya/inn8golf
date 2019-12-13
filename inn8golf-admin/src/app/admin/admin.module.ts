import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CalendarModule } from 'primeng/calendar';
import { DataTablesModule } from 'angular-datatables';
import { AdminRoutingModule } from './admin-routing.module';
import { ZoneComponent } from './zone/zone.component';

import { CommonComponentModule } from '../common/common-componenet.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { GridsterModule } from 'angular-gridster2';
import { TenantComponent } from './tenant/tenant.component';
import { DeviceComponent } from './device/device.component';
import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
import { BuildingLevelComponent } from './building-level/building-level.component';
import { BuildingLevelService } from './building-level/building-level.service';
import { HttpClientModule } from '@angular/common/http';
import { TenantService } from './tenant/tenant.service';
import { ZoneService } from './zone/zone.service';
import { DeviceService } from './device/device.service';
import { AlertConfigurationComponent } from './alert-configuration/alert-configuration.component';
import { EmployeeService } from './employee/employee.service';
import { EmployeeAttendanceService } from './employee/employee-attendance/employee-attendance.service';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AddUpdateComponent } from './users/add-update/add-update.component';
import { AddUpdateAdminComponent } from './add-update-admin/add-update-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';

@NgModule({
  declarations: [
    ZoneComponent,
    BuildingLevelComponent,
    AdminComponent,
    DashboardComponent,
    TenantComponent,
    DeviceComponent,
    EmployeeAttendanceComponent,
    AlertConfigurationComponent,
    UsersComponent,
    CoursesComponent,
    AddUpdateComponent,
    AddUpdateAdminComponent,
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CommonComponentModule,
    GridsterModule,
    FormsModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    DataTablesModule,
    CalendarModule,
    ProgressSpinnerModule,
    ReactiveFormsModule

  ],
  providers: [
    BuildingLevelService,
    DeviceService,
    TenantService,
    ZoneService,
    EmployeeService,
    EmployeeAttendanceService
  ]
})
export class AdminModule { }
