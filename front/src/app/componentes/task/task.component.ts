import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [JsonPipe, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input<Task | undefined>(undefined);
  showLink = input<boolean>(true);
}
