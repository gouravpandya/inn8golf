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
  maxDate: Date;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    this.initForm();
    this.getAdminId();
    const today = new Date();
    this.maxDate = new Date(today.setDate(today.getDate() - 1));
  }

  ngOnInit() {
  }

  private initForm(): void {
    this.courseForm = this.fb.group({
      courseName: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: [''],
      noOfHoles: ['', [Validators.required]],
      noOfRounds: ['', [Validators.required]],
      par: [''],
      holeDistance: [''],
      green: [''],
      fairways: [''],
      season: [''],
      builtYear: [''],
      policies: [''],
      services: [''],
      instruction: [''],
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

  selectedCourse(): void {
  }

  selectedRounds(): void {
  }
}
