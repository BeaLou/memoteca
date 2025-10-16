import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const minusculoValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const autoria = control.value as string | null;
    if (!autoria) {
        return null;
    }
    return autoria !== autoria.toLowerCase() ? { minusculo: true } : null;
};
