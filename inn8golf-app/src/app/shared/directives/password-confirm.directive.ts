import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[password]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordConfirmDirective, multi: true }]

})
export class PasswordConfirmDirective {
  @Input() password: string;
  @Input() confirmPassword: string;

  constructor() { }

  validate(abstractControl: AbstractControl): ValidationErrors | null {
    return this.validatePassword(abstractControl as FormGroup);
  }

  validatePassword(group: FormGroup): any {
    if (group.get(this.password) && group.get(this.password).value) {
      return ((group.get(this.password).value === group.get(this.confirmPassword).value)
        ? group.controls[this.confirmPassword].setErrors(null) : (group.get(this.confirmPassword).value
          ? group.controls[this.confirmPassword].setErrors({ misMatch: true }) : group.controls[this.confirmPassword].setErrors(null)));
    }
  }
}
