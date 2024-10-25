import { Component, inject, input } from '@angular/core';
import { TaskFormComponent } from '../../componentes/task-form/task-form.component';
import { ApiRestService } from '../../services/api-rest.service';
import { TaskPost } from '../../interfaces/task';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './nueva-tarea.page.html',
  styleUrl: './nueva-tarea.page.css'
})
export class NuevaTareaPage {
  _apiService: ApiRestService = inject(ApiRestService);
  user_id = localStorage.getItem('user_id');

  postTask(task: TaskPost) {
    this._apiService.post(`/usuarios/${this.user_id}/tareas/`, JSON.stringify(task))
  }

}
