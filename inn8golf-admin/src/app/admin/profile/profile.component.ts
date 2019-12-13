import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MustMatch } from 'src/app/common/directives/password-confirm.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  adminProfile: FormGroup;
  changePassword: FormGroup;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initAdminForm();
    this.initChangePasswordForm();
  }

  private initAdminForm(): void {
    this.adminProfile = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

  private initChangePasswordForm(): void {
    this.changePassword = this.fb.group({
      oldPassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  profileSubmit(): void {
    if (this.adminProfile.invalid) {
      return;
    }
    console.log(this.adminProfile);
  }

  changePasswordSubmit(): void {
    if (this.changePassword.invalid) {
      return;
    }
    console.log(this.changePassword);
  }
}
