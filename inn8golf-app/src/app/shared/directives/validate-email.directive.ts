import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[validateEmail][formControlName], [validateEmail][formControl],[validateEmail][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidatorDirective), multi: true }
  ]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
  }

  validate(c: AbstractControl): { [key: string]: boolean } {
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    const setErrors = { validateEmail: true };
    if (c && c.value) {
    return ((EMAIL_REGEXP.test(c.value) && c.value)) ? null : setErrors;
    }
  }
}
