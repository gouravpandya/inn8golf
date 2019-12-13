import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-update-course',
  templateUrl: './add-update-course.component.html',
  styleUrls: ['./add-update-course.component.css']
})
export class AddUpdateCourseComponent implements OnInit {
  courseForm: FormGroup;
  courseId: number;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.getAdminId();
  }

  private initForm(): void {
    this.courseForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  addCourse(): void {
    console.log(this.courseForm);
  }

  getAdminId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.id;
      console.log(this.courseId);
    });
  }
}
