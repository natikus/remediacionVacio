import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  private httpClient: HttpClient = inject(HttpClient);

  async getAllTasks(): Promise<Task[]> {
    const tasks = await firstValueFrom(
      this.httpClient.get<Task[]>('/back/tareas'),
    );
    return tasks;
  }

  async getTaskbyId(id: string): Promise<Task> {
    const task = await firstValueFrom(
      this.httpClient.get<Task>(`/back/tareas/${id}/`),
    );
    return task;
  }
}
