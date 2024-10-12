import { Component } from '@angular/core';
import { SearchComponent } from "../search/search.component";
import { TaskComponent } from "../task/task.component";
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, TaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 selectedTask: Task | undefined = {
  id_tarea: 0,
  nombre: "string",
  duracion: 0,
  id_usuario: 0,
  creador: "string",
  usuarios: [
      "string"
    ]
 }

 onSearchValue (value : string) {
    console.log({value});
 }
}
