import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MustMatch } from 'src/app/common/directives/password-confirm.directive';

@Component({
  selector: 'app-add-update-admin',
  templateUrl: './add-update-admin.component.html',
  styleUrls: ['./add-update-admin.component.css']
})
export class AddUpdateAdminComponent implements OnInit {
  adminForm: FormGroup;
  adminId: number;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.getAdminId();
  }

  private initForm(): void {
    this.adminForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  addAdmin(): void {
    console.log(this.adminForm)
  }

  getAdminId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.adminId = params.id;
      console.log(this.adminId);
    });
  }

}
