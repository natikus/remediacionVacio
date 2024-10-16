import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-taskid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './taskid.page.html',
  styleUrl: './taskid.page.css'
})
export class TaskidPage implements OnInit{
  id = input <string>();

  ngOnInit(): void {
    console.log(this.id());
    console.log(typeof(this.id()));
  }
}
