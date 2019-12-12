import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingLevelComponent } from './building-level/building-level.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ZoneComponent } from './zone/zone.component';
import { TenantComponent } from './tenant/tenant.component';
import { DeviceComponent } from './device/device.component';
import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
import { AlertConfigurationComponent } from './alert-configuration/alert-configuration.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AddUpdateComponent } from './users/add-update/add-update.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'building-level', component: BuildingLevelComponent },
      { path: 'zone', component: ZoneComponent },
      { path: 'tenant', component: TenantComponent },
      { path: 'device', component: DeviceComponent },
      { path: 'employee-attendance', component: EmployeeAttendanceComponent },
      { path: 'alertConfiguration', component: AlertConfigurationComponent},
      { path: 'users', component: UsersComponent},
      { path: 'user', component: AddUpdateComponent},
      { path: 'user/:userId', component: AddUpdateComponent},
      { path: 'courses', component: CoursesComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
