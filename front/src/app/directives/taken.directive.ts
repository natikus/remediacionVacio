import { Directive, forwardRef, inject } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';
import { ApiRestService } from '../services/api-rest.service';
import { Task } from '../interfaces/task';

@Directive({
  selector: '[appTaken]',
  standalone: true,
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => TakenDirective),
      multi: true,
    },
  ],
})
export class TakenDirective implements AsyncValidator {
  _apiService: ApiRestService = inject(ApiRestService)

  async checkIfNameExists(name: string): Promise<boolean> { 
    const tasks: Task[] = await this._apiService.get('tareas');
    return tasks.some(task => task.nombre === name);
}

  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    const valor = control.value;
    if (await this.checkIfNameExists(valor)) {
      return {
        // Si hay errores
        NameIsTaken: true,
      };
    }
    return null;
  }
}
