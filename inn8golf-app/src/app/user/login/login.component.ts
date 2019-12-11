import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });
  }

  submit() {
    console.log(this.login.value);
    this.login.reset();
  }
}
