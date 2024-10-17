import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskComponent } from '../../../../componentes/task/task.component';
import { Task } from '../../../../interfaces/task';
import { TasksService } from '../../../../services/tasks.service';

@Component({
  selector: 'app-taskid',
  standalone: true,
  imports: [RouterLink, TaskComponent],
  templateUrl: './taskid.page.html',
  styleUrl: './taskid.page.css',
})
export class TaskidPage implements OnInit {
  id = input<string>();
  selectedTask: Task | undefined;
  tasksService = inject(TasksService);

  async ngOnInit() {
    const taskId = this.id();
    if (taskId) {
      this.selectedTask = await this.tasksService.getTaskbyId(taskId);
    } else {
      console.error('ID de tarea no proporcionado');
    }
  }
}
