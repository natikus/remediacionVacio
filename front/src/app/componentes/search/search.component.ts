import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchOutput = output<string>();
  searchValue: string = 'Hola';
  number = 0;
  public search() {
    console.log(
      'Valor actual ' + this.searchValue + ' ' + 'Click ' + this.number,
    );
    this.number += 1;
    this.searchOutput.emit(this.searchValue);
  }
}
