import { Component, inject, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task } from '../../interfaces/task';
import { TaskComponent } from '../../componentes/task/task.component';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [RouterLink, TaskComponent],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.css',
})
export class TasksPage implements OnInit {
  tasksService = inject(TasksService);
  taskList: Task[] = [];
  async ngOnInit() {
    this.taskList = await this.tasksService.getAllTasks();
  }
}
