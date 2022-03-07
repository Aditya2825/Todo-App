import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {

        const pass = formGroup.controls[password];
        const cpass = formGroup.controls[confirmPassword];

        if (cpass.errors && !cpass.errors.mustMatch) {
            // return if another validator has already found an error on the confirm password
            return;
        }

        // set error on conirm password if validation fails
        if (pass.value !== cpass.value) {
            cpass.setErrors({ mustMatch: true });
        } else {
            cpass.setErrors(null);
        }
    }
}
