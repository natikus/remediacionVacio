import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appDivisor]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => DivisorDirective),
      multi: true,
    },
  ],
})
export class DivisorDirective implements AsyncValidator {
  @Input('appDivisor')
  divisor = '1';

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    try {
      const valorActual: number = parseInt(control.value);
      const divisor: number = parseInt(this.divisor);
      return valorActual % divisor === 0
        ? null
        : { divisor: { divisor: divisor, dividendo: valorActual } };
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
