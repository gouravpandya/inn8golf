import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registration: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initRegistrationForm();
  }

  // validatePassword(group: FormGroup) {
  //   if (group.get('confirmPassword').value && (group.get('password').value !== group.get('confirmPassword').value)) {
  //     group.get('confirmPassword').setErrors({ noMatch: true });
  //     return { invalid: true };
  //   }
  // }

  submit() {
    console.log(this.registration);
    // this.registration.reset();
  }

  private initRegistrationForm(): void {
    this.registration = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]]
    });
  }
}
