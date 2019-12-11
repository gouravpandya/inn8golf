import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PasswordConfirmDirective } from './directives/password-confirm.directive';
import { EmailValidatorDirective } from './directives/validate-email.directive';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    PasswordConfirmDirective,
    EmailValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent,
    PasswordConfirmDirective,
    EmailValidatorDirective
  ]
})
export class SharedModule { }
