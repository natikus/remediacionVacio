import { Component, inject, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TaskPost } from '../../interfaces/task';
import { JsonPipe } from '@angular/common';
import { TakenDirective } from '../../directives/taken.directive';
import { DivisorDirective } from '../../directives/divisor.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, JsonPipe, TakenDirective, DivisorDirective],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  public task: TaskPost = { duracion: 0, nombre: '' };
  public save = output<TaskPost>();
  private router: Router = inject(Router);

  onSubmit(form: NgForm) {
    console.log(this.task);
    if (form.valid) {
      console.info('Task valida');
      this.save.emit(this.task);
      this.router.navigate(['/tasks']);
    } else {
      console.error('Task no valida');
    }
  }
}
