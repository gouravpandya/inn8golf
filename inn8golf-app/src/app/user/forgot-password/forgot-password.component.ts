import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
forgotPasswordForm: FormGroup;

  constructor(private formBulder: FormBuilder) { }

  ngOnInit() {
    this.forgotPasswordForm = this.formBulder.group({
      email: ['', [Validators.required]]
    });
  }

}
