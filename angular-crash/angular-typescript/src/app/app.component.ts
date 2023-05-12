import { Component } from '@angular/core';
import { CatName } from './catname';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  catNameValue!: string;
  list!: CatName[];
  ngOnInit() {
    this.list = [];
    this.catNameValue = '';
  }
  addItem() {
    if (this.catNameValue !== '') {
      const newItem: CatName = {
        id: Date.now(),
        value: this.catNameValue,
        isDone: false,
      };
      this.list.push(newItem);
    }
    this.catNameValue = '';
  }

  deleteItem(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
}
