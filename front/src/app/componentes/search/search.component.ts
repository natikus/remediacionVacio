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
  searchValue: string = '';

  public search() {
    this.searchOutput.emit(this.searchValue);
    this.searchValue = '';
  }
}
