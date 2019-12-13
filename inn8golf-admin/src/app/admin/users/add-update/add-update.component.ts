import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MustMatch } from 'src/app/common/directives/password-confirm.directive';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.css']
})
export class AddUpdateComponent implements OnInit {
  user: FormGroup;
  userId: number;

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initForm();
    this.getUserId();
  }

  private initForm(): void {
    this.user = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  addUser(): void {
    console.log(this.user);
  }

  getUserId(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.id;
      console.log(this.userId);
    });
  }
}
