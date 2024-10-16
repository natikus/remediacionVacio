import { Component, inject, OnInit } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces/task';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private tasksService: TasksService = inject(TasksService);
  taskList: Task[] = [];

  selectedTask: Task | undefined;

  async ngOnInit() {
    this.selectedTask = this.taskList[1];
    this.taskList = await this.tasksService.getAllTasks();
    console.log(this.taskList);
  }

  onSearchValue(value: string) {
    this.selectedTask = this.taskList?.find((task) => task.nombre == value);
  }
}
