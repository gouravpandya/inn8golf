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
import { HttpClientModule } from '@angular/common/http';
import { ZoneService } from './zone/zone.service';
import { AlertConfigurationComponent } from './alert-configuration/alert-configuration.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AddUpdateComponent } from './users/add-update/add-update.component';
import { AddUpdateAdminComponent } from './admin-list/add-update-admin/add-update-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUpdateCourseComponent } from './courses/add-update-course/add-update-course.component';
import { CourseGroupComponent } from './courses/course-group/course-group.component';
import { CourseEventComponent } from './courses/course-event/course-event.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [
    ZoneComponent,
    AdminComponent,
    DashboardComponent,
    AlertConfigurationComponent,
    UsersComponent,
    CoursesComponent,
    AddUpdateComponent,
    AddUpdateAdminComponent,
    AdminListComponent,
    ProfileComponent,
    AddUpdateCourseComponent,
    CourseGroupComponent,
    CourseEventComponent,
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
    ReactiveFormsModule,
    AngularMultiSelectModule,
    FileUploadModule
  ],
  providers: []
})
export class AdminModule { }
