import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  taskList: Task[] | undefined = [
    {
      id_tarea: 1,
      nombre: 'Tarea 1',
      duracion: 5,
      id_usuario: 1,
      creador: 'Nico',
      usuarios: ['Nico', 'Ana', 'Marti'],
    },
    {
      id_tarea: 2,
      nombre: 'Tarea 2',
      duracion: 10,
      id_usuario: 2,
      creador: 'Ana',
      usuarios: ['Nico', 'Ana', 'Marti'],
    },
    {
      id_tarea: 3,
      nombre: 'Tarea 3',
      duracion: 3,
      id_usuario: 3,
      creador: 'Marti',
      usuarios: ['Nico', 'Marti'],
    },
  ];
  
  selectedTask: Task | undefined;

  onSearchValue(value: string) {
    this.selectedTask = this.taskList?.find((task) => task.nombre == value);
  }
}
