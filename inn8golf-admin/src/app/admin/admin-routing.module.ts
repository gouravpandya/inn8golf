import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ErrorComponent } from '../common/error/error.component';
import { UsersComponent } from './users/users.component';
import { CoursesComponent } from './courses/courses.component';
import { AddUpdateComponent } from './users/add-update/add-update.component';
import { AddUpdateAdminComponent } from './admin-list/add-update-admin/add-update-admin.component';
import { AdminListComponent } from './admin-list/admin-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AddUpdateCourseComponent } from './courses/add-update-course/add-update-course.component';
import { CourseEventComponent } from './courses/course-event/course-event.component';
import { CourseGroupComponent } from './courses/course-group/course-group.component';


const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: UsersComponent},
      { path: 'add-user', component: AddUpdateComponent},
      { path: 'update-user/:id', component: AddUpdateComponent},
      { path: 'administration', component: AdminListComponent},
      { path: 'add-admin', component: AddUpdateAdminComponent},
      { path: 'update-admin/:id', component: AddUpdateAdminComponent},
      { path: 'courses', component: CoursesComponent},
      { path: 'profile', component: ProfileComponent},
      { path: 'add-course', component: AddUpdateCourseComponent},
      { path: 'update-course/:id', component: AddUpdateCourseComponent},
      { path: 'course-groups', component: CourseGroupComponent},
      { path: 'course-events', component: CourseEventComponent},
      { path: '**', component: ErrorComponent},
    ]
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
